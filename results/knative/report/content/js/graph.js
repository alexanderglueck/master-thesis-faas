/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 188.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 6.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 8.0], [22.4, 8.0], [22.5, 8.0], [22.6, 8.0], [22.7, 8.0], [22.8, 8.0], [22.9, 8.0], [23.0, 8.0], [23.1, 8.0], [23.2, 8.0], [23.3, 8.0], [23.4, 8.0], [23.5, 8.0], [23.6, 8.0], [23.7, 8.0], [23.8, 8.0], [23.9, 8.0], [24.0, 8.0], [24.1, 8.0], [24.2, 8.0], [24.3, 8.0], [24.4, 8.0], [24.5, 8.0], [24.6, 8.0], [24.7, 8.0], [24.8, 8.0], [24.9, 8.0], [25.0, 8.0], [25.1, 8.0], [25.2, 8.0], [25.3, 8.0], [25.4, 8.0], [25.5, 8.0], [25.6, 8.0], [25.7, 8.0], [25.8, 8.0], [25.9, 8.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 8.0], [26.5, 8.0], [26.6, 8.0], [26.7, 8.0], [26.8, 8.0], [26.9, 8.0], [27.0, 8.0], [27.1, 9.0], [27.2, 9.0], [27.3, 9.0], [27.4, 9.0], [27.5, 9.0], [27.6, 9.0], [27.7, 9.0], [27.8, 9.0], [27.9, 9.0], [28.0, 9.0], [28.1, 9.0], [28.2, 9.0], [28.3, 9.0], [28.4, 9.0], [28.5, 9.0], [28.6, 9.0], [28.7, 9.0], [28.8, 9.0], [28.9, 9.0], [29.0, 9.0], [29.1, 9.0], [29.2, 9.0], [29.3, 9.0], [29.4, 9.0], [29.5, 9.0], [29.6, 9.0], [29.7, 9.0], [29.8, 9.0], [29.9, 9.0], [30.0, 9.0], [30.1, 9.0], [30.2, 9.0], [30.3, 9.0], [30.4, 9.0], [30.5, 9.0], [30.6, 9.0], [30.7, 9.0], [30.8, 9.0], [30.9, 9.0], [31.0, 9.0], [31.1, 9.0], [31.2, 9.0], [31.3, 9.0], [31.4, 9.0], [31.5, 9.0], [31.6, 9.0], [31.7, 10.0], [31.8, 10.0], [31.9, 10.0], [32.0, 10.0], [32.1, 10.0], [32.2, 10.0], [32.3, 10.0], [32.4, 10.0], [32.5, 10.0], [32.6, 10.0], [32.7, 10.0], [32.8, 10.0], [32.9, 10.0], [33.0, 10.0], [33.1, 10.0], [33.2, 10.0], [33.3, 10.0], [33.4, 10.0], [33.5, 10.0], [33.6, 10.0], [33.7, 10.0], [33.8, 10.0], [33.9, 10.0], [34.0, 10.0], [34.1, 10.0], [34.2, 10.0], [34.3, 10.0], [34.4, 10.0], [34.5, 10.0], [34.6, 10.0], [34.7, 10.0], [34.8, 10.0], [34.9, 10.0], [35.0, 10.0], [35.1, 10.0], [35.2, 10.0], [35.3, 10.0], [35.4, 10.0], [35.5, 10.0], [35.6, 10.0], [35.7, 10.0], [35.8, 10.0], [35.9, 10.0], [36.0, 10.0], [36.1, 10.0], [36.2, 10.0], [36.3, 10.0], [36.4, 10.0], [36.5, 10.0], [36.6, 10.0], [36.7, 10.0], [36.8, 10.0], [36.9, 10.0], [37.0, 10.0], [37.1, 10.0], [37.2, 10.0], [37.3, 10.0], [37.4, 10.0], [37.5, 10.0], [37.6, 10.0], [37.7, 11.0], [37.8, 11.0], [37.9, 11.0], [38.0, 11.0], [38.1, 11.0], [38.2, 11.0], [38.3, 11.0], [38.4, 11.0], [38.5, 11.0], [38.6, 11.0], [38.7, 11.0], [38.8, 11.0], [38.9, 11.0], [39.0, 11.0], [39.1, 11.0], [39.2, 11.0], [39.3, 11.0], [39.4, 11.0], [39.5, 11.0], [39.6, 11.0], [39.7, 11.0], [39.8, 11.0], [39.9, 11.0], [40.0, 11.0], [40.1, 11.0], [40.2, 11.0], [40.3, 11.0], [40.4, 11.0], [40.5, 11.0], [40.6, 11.0], [40.7, 11.0], [40.8, 11.0], [40.9, 11.0], [41.0, 11.0], [41.1, 11.0], [41.2, 11.0], [41.3, 11.0], [41.4, 11.0], [41.5, 11.0], [41.6, 11.0], [41.7, 11.0], [41.8, 11.0], [41.9, 11.0], [42.0, 11.0], [42.1, 11.0], [42.2, 11.0], [42.3, 11.0], [42.4, 11.0], [42.5, 11.0], [42.6, 11.0], [42.7, 11.0], [42.8, 11.0], [42.9, 11.0], [43.0, 11.0], [43.1, 11.0], [43.2, 11.0], [43.3, 11.0], [43.4, 11.0], [43.5, 11.0], [43.6, 11.0], [43.7, 11.0], [43.8, 11.0], [43.9, 11.0], [44.0, 11.0], [44.1, 11.0], [44.2, 11.0], [44.3, 11.0], [44.4, 11.0], [44.5, 11.0], [44.6, 11.0], [44.7, 11.0], [44.8, 11.0], [44.9, 11.0], [45.0, 11.0], [45.1, 11.0], [45.2, 11.0], [45.3, 11.0], [45.4, 11.0], [45.5, 11.0], [45.6, 11.0], [45.7, 11.0], [45.8, 11.0], [45.9, 11.0], [46.0, 11.0], [46.1, 11.0], [46.2, 11.0], [46.3, 11.0], [46.4, 11.0], [46.5, 12.0], [46.6, 12.0], [46.7, 12.0], [46.8, 12.0], [46.9, 12.0], [47.0, 12.0], [47.1, 12.0], [47.2, 12.0], [47.3, 12.0], [47.4, 12.0], [47.5, 12.0], [47.6, 12.0], [47.7, 12.0], [47.8, 12.0], [47.9, 12.0], [48.0, 12.0], [48.1, 12.0], [48.2, 12.0], [48.3, 12.0], [48.4, 12.0], [48.5, 12.0], [48.6, 12.0], [48.7, 12.0], [48.8, 12.0], [48.9, 12.0], [49.0, 12.0], [49.1, 12.0], [49.2, 12.0], [49.3, 12.0], [49.4, 12.0], [49.5, 12.0], [49.6, 12.0], [49.7, 12.0], [49.8, 12.0], [49.9, 12.0], [50.0, 12.0], [50.1, 12.0], [50.2, 12.0], [50.3, 12.0], [50.4, 12.0], [50.5, 12.0], [50.6, 12.0], [50.7, 12.0], [50.8, 12.0], [50.9, 12.0], [51.0, 12.0], [51.1, 12.0], [51.2, 12.0], [51.3, 12.0], [51.4, 12.0], [51.5, 12.0], [51.6, 12.0], [51.7, 12.0], [51.8, 12.0], [51.9, 12.0], [52.0, 12.0], [52.1, 12.0], [52.2, 12.0], [52.3, 12.0], [52.4, 12.0], [52.5, 12.0], [52.6, 12.0], [52.7, 12.0], [52.8, 12.0], [52.9, 12.0], [53.0, 12.0], [53.1, 12.0], [53.2, 12.0], [53.3, 12.0], [53.4, 12.0], [53.5, 12.0], [53.6, 12.0], [53.7, 12.0], [53.8, 12.0], [53.9, 12.0], [54.0, 12.0], [54.1, 12.0], [54.2, 12.0], [54.3, 13.0], [54.4, 13.0], [54.5, 13.0], [54.6, 13.0], [54.7, 13.0], [54.8, 13.0], [54.9, 13.0], [55.0, 13.0], [55.1, 13.0], [55.2, 13.0], [55.3, 13.0], [55.4, 13.0], [55.5, 13.0], [55.6, 13.0], [55.7, 13.0], [55.8, 13.0], [55.9, 13.0], [56.0, 13.0], [56.1, 13.0], [56.2, 13.0], [56.3, 13.0], [56.4, 13.0], [56.5, 13.0], [56.6, 13.0], [56.7, 13.0], [56.8, 13.0], [56.9, 13.0], [57.0, 13.0], [57.1, 13.0], [57.2, 13.0], [57.3, 13.0], [57.4, 13.0], [57.5, 13.0], [57.6, 13.0], [57.7, 13.0], [57.8, 13.0], [57.9, 13.0], [58.0, 13.0], [58.1, 13.0], [58.2, 13.0], [58.3, 13.0], [58.4, 13.0], [58.5, 13.0], [58.6, 13.0], [58.7, 13.0], [58.8, 13.0], [58.9, 13.0], [59.0, 13.0], [59.1, 14.0], [59.2, 14.0], [59.3, 14.0], [59.4, 14.0], [59.5, 14.0], [59.6, 14.0], [59.7, 14.0], [59.8, 14.0], [59.9, 14.0], [60.0, 14.0], [60.1, 14.0], [60.2, 14.0], [60.3, 14.0], [60.4, 14.0], [60.5, 14.0], [60.6, 14.0], [60.7, 14.0], [60.8, 14.0], [60.9, 14.0], [61.0, 14.0], [61.1, 14.0], [61.2, 14.0], [61.3, 14.0], [61.4, 14.0], [61.5, 14.0], [61.6, 14.0], [61.7, 14.0], [61.8, 14.0], [61.9, 14.0], [62.0, 14.0], [62.1, 14.0], [62.2, 14.0], [62.3, 14.0], [62.4, 14.0], [62.5, 14.0], [62.6, 15.0], [62.7, 15.0], [62.8, 15.0], [62.9, 15.0], [63.0, 15.0], [63.1, 15.0], [63.2, 15.0], [63.3, 15.0], [63.4, 15.0], [63.5, 15.0], [63.6, 15.0], [63.7, 15.0], [63.8, 15.0], [63.9, 15.0], [64.0, 15.0], [64.1, 15.0], [64.2, 15.0], [64.3, 15.0], [64.4, 15.0], [64.5, 15.0], [64.6, 15.0], [64.7, 15.0], [64.8, 15.0], [64.9, 15.0], [65.0, 15.0], [65.1, 15.0], [65.2, 15.0], [65.3, 15.0], [65.4, 15.0], [65.5, 15.0], [65.6, 15.0], [65.7, 16.0], [65.8, 16.0], [65.9, 16.0], [66.0, 16.0], [66.1, 16.0], [66.2, 16.0], [66.3, 16.0], [66.4, 16.0], [66.5, 16.0], [66.6, 16.0], [66.7, 16.0], [66.8, 16.0], [66.9, 16.0], [67.0, 16.0], [67.1, 16.0], [67.2, 16.0], [67.3, 16.0], [67.4, 16.0], [67.5, 16.0], [67.6, 16.0], [67.7, 16.0], [67.8, 16.0], [67.9, 16.0], [68.0, 16.0], [68.1, 16.0], [68.2, 17.0], [68.3, 17.0], [68.4, 17.0], [68.5, 17.0], [68.6, 17.0], [68.7, 17.0], [68.8, 17.0], [68.9, 17.0], [69.0, 17.0], [69.1, 17.0], [69.2, 17.0], [69.3, 17.0], [69.4, 17.0], [69.5, 17.0], [69.6, 17.0], [69.7, 17.0], [69.8, 17.0], [69.9, 17.0], [70.0, 17.0], [70.1, 18.0], [70.2, 18.0], [70.3, 18.0], [70.4, 18.0], [70.5, 18.0], [70.6, 18.0], [70.7, 18.0], [70.8, 18.0], [70.9, 18.0], [71.0, 18.0], [71.1, 18.0], [71.2, 18.0], [71.3, 18.0], [71.4, 18.0], [71.5, 18.0], [71.6, 19.0], [71.7, 19.0], [71.8, 19.0], [71.9, 19.0], [72.0, 19.0], [72.1, 19.0], [72.2, 19.0], [72.3, 19.0], [72.4, 19.0], [72.5, 19.0], [72.6, 19.0], [72.7, 19.0], [72.8, 19.0], [72.9, 19.0], [73.0, 19.0], [73.1, 19.0], [73.2, 20.0], [73.3, 20.0], [73.4, 20.0], [73.5, 20.0], [73.6, 20.0], [73.7, 20.0], [73.8, 20.0], [73.9, 20.0], [74.0, 20.0], [74.1, 20.0], [74.2, 20.0], [74.3, 20.0], [74.4, 20.0], [74.5, 20.0], [74.6, 20.0], [74.7, 20.0], [74.8, 20.0], [74.9, 20.0], [75.0, 20.0], [75.1, 20.0], [75.2, 20.0], [75.3, 20.0], [75.4, 20.0], [75.5, 20.0], [75.6, 21.0], [75.7, 21.0], [75.8, 21.0], [75.9, 21.0], [76.0, 21.0], [76.1, 21.0], [76.2, 21.0], [76.3, 21.0], [76.4, 21.0], [76.5, 21.0], [76.6, 21.0], [76.7, 21.0], [76.8, 21.0], [76.9, 21.0], [77.0, 21.0], [77.1, 21.0], [77.2, 21.0], [77.3, 21.0], [77.4, 21.0], [77.5, 21.0], [77.6, 21.0], [77.7, 21.0], [77.8, 21.0], [77.9, 21.0], [78.0, 21.0], [78.1, 21.0], [78.2, 21.0], [78.3, 21.0], [78.4, 22.0], [78.5, 22.0], [78.6, 22.0], [78.7, 22.0], [78.8, 22.0], [78.9, 22.0], [79.0, 22.0], [79.1, 22.0], [79.2, 22.0], [79.3, 22.0], [79.4, 22.0], [79.5, 22.0], [79.6, 22.0], [79.7, 22.0], [79.8, 22.0], [79.9, 22.0], [80.0, 22.0], [80.1, 22.0], [80.2, 22.0], [80.3, 22.0], [80.4, 22.0], [80.5, 23.0], [80.6, 23.0], [80.7, 23.0], [80.8, 23.0], [80.9, 23.0], [81.0, 23.0], [81.1, 23.0], [81.2, 23.0], [81.3, 23.0], [81.4, 23.0], [81.5, 23.0], [81.6, 23.0], [81.7, 24.0], [81.8, 24.0], [81.9, 24.0], [82.0, 24.0], [82.1, 24.0], [82.2, 24.0], [82.3, 24.0], [82.4, 25.0], [82.5, 25.0], [82.6, 25.0], [82.7, 25.0], [82.8, 25.0], [82.9, 25.0], [83.0, 26.0], [83.1, 26.0], [83.2, 26.0], [83.3, 27.0], [83.4, 27.0], [83.5, 27.0], [83.6, 28.0], [83.7, 28.0], [83.8, 28.0], [83.9, 28.0], [84.0, 29.0], [84.1, 29.0], [84.2, 30.0], [84.3, 30.0], [84.4, 30.0], [84.5, 31.0], [84.6, 31.0], [84.7, 31.0], [84.8, 32.0], [84.9, 32.0], [85.0, 32.0], [85.1, 32.0], [85.2, 33.0], [85.3, 33.0], [85.4, 33.0], [85.5, 33.0], [85.6, 34.0], [85.7, 34.0], [85.8, 34.0], [85.9, 34.0], [86.0, 34.0], [86.1, 35.0], [86.2, 35.0], [86.3, 35.0], [86.4, 35.0], [86.5, 35.0], [86.6, 36.0], [86.7, 36.0], [86.8, 36.0], [86.9, 36.0], [87.0, 36.0], [87.1, 37.0], [87.2, 37.0], [87.3, 37.0], [87.4, 37.0], [87.5, 37.0], [87.6, 37.0], [87.7, 37.0], [87.8, 38.0], [87.9, 38.0], [88.0, 38.0], [88.1, 38.0], [88.2, 38.0], [88.3, 38.0], [88.4, 39.0], [88.5, 39.0], [88.6, 39.0], [88.7, 39.0], [88.8, 39.0], [88.9, 39.0], [89.0, 39.0], [89.1, 40.0], [89.2, 40.0], [89.3, 40.0], [89.4, 40.0], [89.5, 40.0], [89.6, 40.0], [89.7, 40.0], [89.8, 40.0], [89.9, 40.0], [90.0, 41.0], [90.1, 41.0], [90.2, 41.0], [90.3, 41.0], [90.4, 41.0], [90.5, 41.0], [90.6, 41.0], [90.7, 41.0], [90.8, 42.0], [90.9, 42.0], [91.0, 42.0], [91.1, 42.0], [91.2, 42.0], [91.3, 42.0], [91.4, 42.0], [91.5, 42.0], [91.6, 43.0], [91.7, 43.0], [91.8, 43.0], [91.9, 43.0], [92.0, 43.0], [92.1, 43.0], [92.2, 43.0], [92.3, 43.0], [92.4, 44.0], [92.5, 44.0], [92.6, 44.0], [92.7, 44.0], [92.8, 44.0], [92.9, 44.0], [93.0, 44.0], [93.1, 44.0], [93.2, 45.0], [93.3, 45.0], [93.4, 45.0], [93.5, 45.0], [93.6, 45.0], [93.7, 45.0], [93.8, 45.0], [93.9, 46.0], [94.0, 46.0], [94.1, 46.0], [94.2, 46.0], [94.3, 46.0], [94.4, 46.0], [94.5, 46.0], [94.6, 47.0], [94.7, 47.0], [94.8, 47.0], [94.9, 47.0], [95.0, 47.0], [95.1, 47.0], [95.2, 47.0], [95.3, 48.0], [95.4, 48.0], [95.5, 48.0], [95.6, 48.0], [95.7, 48.0], [95.8, 48.0], [95.9, 49.0], [96.0, 49.0], [96.1, 49.0], [96.2, 49.0], [96.3, 49.0], [96.4, 50.0], [96.5, 50.0], [96.6, 50.0], [96.7, 50.0], [96.8, 50.0], [96.9, 51.0], [97.0, 51.0], [97.1, 51.0], [97.2, 51.0], [97.3, 52.0], [97.4, 52.0], [97.5, 52.0], [97.6, 52.0], [97.7, 53.0], [97.8, 53.0], [97.9, 53.0], [98.0, 53.0], [98.1, 54.0], [98.2, 54.0], [98.3, 54.0], [98.4, 55.0], [98.5, 55.0], [98.6, 55.0], [98.7, 56.0], [98.8, 56.0], [98.9, 57.0], [99.0, 58.0], [99.1, 59.0], [99.2, 59.0], [99.3, 60.0], [99.4, 61.0], [99.5, 62.0], [99.6, 63.0], [99.7, 64.0], [99.8, 66.0], [99.9, 100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 102.0, "minX": 0.0, "maxY": 99898.0, "series": [{"data": [[0.0, 99898.0], [100.0, 102.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 100000.0, "series": [{"data": [[0.0, 100000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 60.65174053059353, "minX": 1.71822738E12, "maxY": 71.33744227549607, "series": [{"data": [[1.71822744E12, 71.33744227549607], [1.71822738E12, 60.65174053059353]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822744E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2.2826086956521734, "minX": 1.0, "maxY": 24.640969162995603, "series": [{"data": [[2.0, 2.312500000000001], [3.0, 2.3495934959349607], [4.0, 2.2863636363636366], [5.0, 2.2826086956521734], [6.0, 2.390625000000003], [7.0, 2.478571428571428], [8.0, 2.414110429447854], [9.0, 3.064788732394365], [10.0, 2.813953488372093], [11.0, 3.0498753117206987], [12.0, 2.9359605911330067], [13.0, 3.6675749318801087], [14.0, 3.802739726027397], [15.0, 3.7552941176470607], [16.0, 4.495821727019498], [17.0, 4.289237668161433], [18.0, 4.896935933147631], [19.0, 4.977272727272732], [20.0, 5.682065217391305], [21.0, 6.394636015325677], [22.0, 5.54736842105263], [23.0, 6.707612456747405], [24.0, 6.51700680272109], [25.0, 6.307891332470891], [26.0, 7.207772795216746], [27.0, 6.989626556016596], [28.0, 8.166962699822374], [29.0, 7.426640926640928], [30.0, 11.115763546798037], [31.0, 8.198807157057644], [32.0, 9.018087855297159], [33.0, 10.098471986417662], [34.0, 9.250000000000002], [35.0, 8.924623115577887], [36.0, 8.851508120649658], [37.0, 7.823404255319157], [38.0, 9.421118012422367], [39.0, 10.453367875647656], [40.0, 11.391935483870977], [41.0, 9.600000000000001], [42.0, 9.722007722007733], [43.0, 11.982758620689655], [44.0, 11.09033877038898], [45.0, 11.251481795088917], [46.0, 11.154838709677428], [47.0, 11.391304347826074], [48.0, 11.704883227176216], [49.0, 12.913986537023188], [50.0, 12.421370967741936], [51.0, 12.6215139442231], [52.0, 13.432181536874676], [53.0, 13.13382594417079], [54.0, 13.103585657370514], [55.0, 15.359022556391002], [56.0, 13.882427307206072], [57.0, 14.156699470098415], [58.0, 13.07389162561577], [59.0, 20.385008517887563], [60.0, 16.409957627118658], [61.0, 17.179153094462546], [62.0, 14.471037555697013], [63.0, 18.077199281867152], [64.0, 15.434554973821994], [65.0, 15.865610328638493], [66.0, 17.642654795629316], [67.0, 16.71391076115486], [68.0, 16.53406593406592], [69.0, 17.18149675898644], [70.0, 16.93488943488946], [71.0, 21.043233082706767], [72.0, 16.66825095057032], [73.0, 18.681360201511353], [74.0, 20.16934619506967], [75.0, 17.762672811059907], [76.0, 18.885514018691605], [77.0, 19.3907265209687], [78.0, 18.396892655367207], [79.0, 20.461971830985934], [80.0, 19.37596899224803], [81.0, 19.91791227640281], [82.0, 19.91023936170214], [83.0, 21.70809248554914], [84.0, 24.640969162995603], [85.0, 20.052159282108807], [86.0, 20.954274776690788], [87.0, 20.9630271519353], [88.0, 21.45352112676059], [89.0, 24.28004535147393], [90.0, 21.77191524719563], [91.0, 23.170559210526346], [92.0, 23.193383356070935], [93.0, 23.31062385800056], [94.0, 22.8250701590271], [1.0, 3.4666666666666663]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[66.45973999999936, 16.731099999999874]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 94.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 108031.23333333334, "minX": 1.71822738E12, "maxY": 445253.9, "series": [{"data": [[1.71822744E12, 445253.9], [1.71822738E12, 373865.63333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71822744E12, 128635.43333333333], [1.71822738E12, 108031.23333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822744E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 15.540166933204732, "minX": 1.71822738E12, "maxY": 17.73127518260272, "series": [{"data": [[1.71822744E12, 17.73127518260272], [1.71822738E12, 15.540166933204732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822744E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 15.536617959559084, "minX": 1.71822738E12, "maxY": 17.729361764760064, "series": [{"data": [[1.71822744E12, 17.729361764760064], [1.71822738E12, 15.536617959559084]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822744E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71822738E12, "maxY": 0.0020154665147764372, "series": [{"data": [[1.71822744E12, 0.0], [1.71822738E12, 0.0020154665147764372]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822744E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71822738E12, "maxY": 188.0, "series": [{"data": [[1.71822744E12, 77.0], [1.71822738E12, 188.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71822744E12, 34.0], [1.71822738E12, 46.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71822744E12, 49.0], [1.71822738E12, 62.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71822744E12, 41.0], [1.71822738E12, 52.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71822744E12, 1.0], [1.71822738E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71822744E12, 10.0], [1.71822738E12, 17.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822744E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 353.0, "maxY": 19.0, "series": [{"data": [[2288.0, 4.0], [3119.0, 3.0], [3350.0, 6.0], [3529.0, 4.0], [3687.0, 11.0], [3905.0, 8.0], [3931.0, 7.0], [3940.0, 12.0], [3949.0, 9.0], [3879.0, 16.0], [3927.0, 19.0], [3890.0, 18.0], [3929.0, 18.0], [3955.0, 14.0], [3924.0, 12.0], [3954.0, 10.0], [4039.0, 13.0], [4044.0, 16.0], [4094.0, 15.0], [4080.0, 14.0], [4062.0, 14.0], [3999.0, 13.0], [3989.0, 12.0], [3983.0, 7.0], [4098.0, 19.0], [4103.0, 15.0], [353.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4103.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 353.0, "maxY": 19.0, "series": [{"data": [[2288.0, 4.0], [3119.0, 3.0], [3350.0, 6.0], [3529.0, 4.0], [3687.0, 11.0], [3905.0, 8.0], [3931.0, 7.0], [3940.0, 12.0], [3949.0, 9.0], [3879.0, 16.0], [3927.0, 19.0], [3890.0, 18.0], [3929.0, 18.0], [3955.0, 14.0], [3924.0, 12.0], [3954.0, 10.0], [4039.0, 13.0], [4044.0, 16.0], [4094.0, 15.0], [4080.0, 14.0], [4062.0, 14.0], [3999.0, 13.0], [3989.0, 12.0], [3983.0, 7.0], [4098.0, 19.0], [4103.0, 15.0], [353.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4103.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 762.3, "minX": 1.71822738E12, "maxY": 904.3666666666667, "series": [{"data": [[1.71822744E12, 904.3666666666667], [1.71822738E12, 762.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822744E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 760.7833333333333, "minX": 1.71822738E12, "maxY": 905.8833333333333, "series": [{"data": [[1.71822744E12, 905.8833333333333], [1.71822738E12, 760.7833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822744E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 760.7833333333333, "minX": 1.71822738E12, "maxY": 905.8833333333333, "series": [{"data": [[1.71822744E12, 905.8833333333333], [1.71822738E12, 760.7833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822744E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 760.7833333333333, "minX": 1.71822738E12, "maxY": 905.8833333333333, "series": [{"data": [[1.71822744E12, 905.8833333333333], [1.71822738E12, 760.7833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822744E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

