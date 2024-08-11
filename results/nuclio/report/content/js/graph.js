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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 124.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 8.0], [10.8, 8.0], [10.9, 8.0], [11.0, 8.0], [11.1, 8.0], [11.2, 8.0], [11.3, 8.0], [11.4, 8.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 9.0], [12.0, 9.0], [12.1, 9.0], [12.2, 9.0], [12.3, 9.0], [12.4, 9.0], [12.5, 9.0], [12.6, 9.0], [12.7, 9.0], [12.8, 9.0], [12.9, 9.0], [13.0, 9.0], [13.1, 9.0], [13.2, 9.0], [13.3, 9.0], [13.4, 9.0], [13.5, 9.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 11.0], [17.6, 11.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 12.0], [19.8, 12.0], [19.9, 12.0], [20.0, 12.0], [20.1, 12.0], [20.2, 12.0], [20.3, 12.0], [20.4, 12.0], [20.5, 12.0], [20.6, 12.0], [20.7, 12.0], [20.8, 12.0], [20.9, 12.0], [21.0, 12.0], [21.1, 12.0], [21.2, 12.0], [21.3, 12.0], [21.4, 12.0], [21.5, 12.0], [21.6, 12.0], [21.7, 12.0], [21.8, 12.0], [21.9, 12.0], [22.0, 12.0], [22.1, 12.0], [22.2, 12.0], [22.3, 13.0], [22.4, 13.0], [22.5, 13.0], [22.6, 13.0], [22.7, 13.0], [22.8, 13.0], [22.9, 13.0], [23.0, 13.0], [23.1, 13.0], [23.2, 13.0], [23.3, 13.0], [23.4, 13.0], [23.5, 13.0], [23.6, 13.0], [23.7, 13.0], [23.8, 13.0], [23.9, 13.0], [24.0, 13.0], [24.1, 13.0], [24.2, 13.0], [24.3, 13.0], [24.4, 13.0], [24.5, 13.0], [24.6, 13.0], [24.7, 13.0], [24.8, 13.0], [24.9, 13.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 14.0], [28.5, 14.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 16.0], [34.8, 16.0], [34.9, 16.0], [35.0, 16.0], [35.1, 16.0], [35.2, 16.0], [35.3, 16.0], [35.4, 16.0], [35.5, 16.0], [35.6, 16.0], [35.7, 16.0], [35.8, 16.0], [35.9, 16.0], [36.0, 16.0], [36.1, 16.0], [36.2, 16.0], [36.3, 16.0], [36.4, 16.0], [36.5, 16.0], [36.6, 17.0], [36.7, 17.0], [36.8, 17.0], [36.9, 17.0], [37.0, 17.0], [37.1, 17.0], [37.2, 17.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 17.0], [37.8, 17.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 17.0], [38.5, 17.0], [38.6, 17.0], [38.7, 17.0], [38.8, 17.0], [38.9, 17.0], [39.0, 17.0], [39.1, 17.0], [39.2, 17.0], [39.3, 17.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 17.0], [40.0, 17.0], [40.1, 17.0], [40.2, 17.0], [40.3, 17.0], [40.4, 17.0], [40.5, 17.0], [40.6, 17.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 18.0], [41.6, 18.0], [41.7, 18.0], [41.8, 18.0], [41.9, 18.0], [42.0, 18.0], [42.1, 18.0], [42.2, 18.0], [42.3, 18.0], [42.4, 18.0], [42.5, 18.0], [42.6, 18.0], [42.7, 18.0], [42.8, 18.0], [42.9, 18.0], [43.0, 18.0], [43.1, 18.0], [43.2, 18.0], [43.3, 18.0], [43.4, 18.0], [43.5, 18.0], [43.6, 18.0], [43.7, 18.0], [43.8, 18.0], [43.9, 18.0], [44.0, 18.0], [44.1, 18.0], [44.2, 18.0], [44.3, 18.0], [44.4, 18.0], [44.5, 19.0], [44.6, 19.0], [44.7, 19.0], [44.8, 19.0], [44.9, 19.0], [45.0, 19.0], [45.1, 19.0], [45.2, 19.0], [45.3, 19.0], [45.4, 19.0], [45.5, 19.0], [45.6, 19.0], [45.7, 19.0], [45.8, 19.0], [45.9, 19.0], [46.0, 19.0], [46.1, 19.0], [46.2, 19.0], [46.3, 19.0], [46.4, 19.0], [46.5, 19.0], [46.6, 19.0], [46.7, 19.0], [46.8, 19.0], [46.9, 19.0], [47.0, 19.0], [47.1, 19.0], [47.2, 19.0], [47.3, 19.0], [47.4, 19.0], [47.5, 19.0], [47.6, 19.0], [47.7, 19.0], [47.8, 19.0], [47.9, 19.0], [48.0, 19.0], [48.1, 19.0], [48.2, 19.0], [48.3, 19.0], [48.4, 19.0], [48.5, 19.0], [48.6, 19.0], [48.7, 19.0], [48.8, 19.0], [48.9, 19.0], [49.0, 19.0], [49.1, 19.0], [49.2, 19.0], [49.3, 19.0], [49.4, 19.0], [49.5, 19.0], [49.6, 19.0], [49.7, 20.0], [49.8, 20.0], [49.9, 20.0], [50.0, 20.0], [50.1, 20.0], [50.2, 20.0], [50.3, 20.0], [50.4, 20.0], [50.5, 20.0], [50.6, 20.0], [50.7, 20.0], [50.8, 20.0], [50.9, 20.0], [51.0, 20.0], [51.1, 20.0], [51.2, 20.0], [51.3, 20.0], [51.4, 20.0], [51.5, 20.0], [51.6, 20.0], [51.7, 20.0], [51.8, 20.0], [51.9, 20.0], [52.0, 20.0], [52.1, 20.0], [52.2, 20.0], [52.3, 20.0], [52.4, 20.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 20.0], [52.9, 20.0], [53.0, 20.0], [53.1, 20.0], [53.2, 20.0], [53.3, 20.0], [53.4, 20.0], [53.5, 20.0], [53.6, 20.0], [53.7, 20.0], [53.8, 20.0], [53.9, 20.0], [54.0, 20.0], [54.1, 20.0], [54.2, 20.0], [54.3, 20.0], [54.4, 20.0], [54.5, 20.0], [54.6, 20.0], [54.7, 20.0], [54.8, 20.0], [54.9, 20.0], [55.0, 20.0], [55.1, 20.0], [55.2, 20.0], [55.3, 20.0], [55.4, 20.0], [55.5, 20.0], [55.6, 20.0], [55.7, 20.0], [55.8, 20.0], [55.9, 20.0], [56.0, 21.0], [56.1, 21.0], [56.2, 21.0], [56.3, 21.0], [56.4, 21.0], [56.5, 21.0], [56.6, 21.0], [56.7, 21.0], [56.8, 21.0], [56.9, 21.0], [57.0, 21.0], [57.1, 21.0], [57.2, 21.0], [57.3, 21.0], [57.4, 21.0], [57.5, 21.0], [57.6, 21.0], [57.7, 21.0], [57.8, 21.0], [57.9, 21.0], [58.0, 21.0], [58.1, 21.0], [58.2, 21.0], [58.3, 21.0], [58.4, 21.0], [58.5, 21.0], [58.6, 21.0], [58.7, 21.0], [58.8, 21.0], [58.9, 21.0], [59.0, 21.0], [59.1, 21.0], [59.2, 21.0], [59.3, 21.0], [59.4, 21.0], [59.5, 21.0], [59.6, 21.0], [59.7, 21.0], [59.8, 21.0], [59.9, 21.0], [60.0, 21.0], [60.1, 21.0], [60.2, 21.0], [60.3, 21.0], [60.4, 21.0], [60.5, 21.0], [60.6, 21.0], [60.7, 21.0], [60.8, 21.0], [60.9, 21.0], [61.0, 21.0], [61.1, 21.0], [61.2, 21.0], [61.3, 21.0], [61.4, 21.0], [61.5, 21.0], [61.6, 21.0], [61.7, 21.0], [61.8, 21.0], [61.9, 21.0], [62.0, 21.0], [62.1, 21.0], [62.2, 21.0], [62.3, 21.0], [62.4, 21.0], [62.5, 21.0], [62.6, 21.0], [62.7, 22.0], [62.8, 22.0], [62.9, 22.0], [63.0, 22.0], [63.1, 22.0], [63.2, 22.0], [63.3, 22.0], [63.4, 22.0], [63.5, 22.0], [63.6, 22.0], [63.7, 22.0], [63.8, 22.0], [63.9, 22.0], [64.0, 22.0], [64.1, 22.0], [64.2, 22.0], [64.3, 22.0], [64.4, 22.0], [64.5, 22.0], [64.6, 22.0], [64.7, 22.0], [64.8, 22.0], [64.9, 22.0], [65.0, 22.0], [65.1, 22.0], [65.2, 22.0], [65.3, 22.0], [65.4, 22.0], [65.5, 22.0], [65.6, 22.0], [65.7, 22.0], [65.8, 22.0], [65.9, 22.0], [66.0, 22.0], [66.1, 22.0], [66.2, 22.0], [66.3, 22.0], [66.4, 22.0], [66.5, 22.0], [66.6, 22.0], [66.7, 22.0], [66.8, 22.0], [66.9, 22.0], [67.0, 22.0], [67.1, 22.0], [67.2, 22.0], [67.3, 22.0], [67.4, 22.0], [67.5, 22.0], [67.6, 22.0], [67.7, 22.0], [67.8, 22.0], [67.9, 22.0], [68.0, 22.0], [68.1, 22.0], [68.2, 22.0], [68.3, 22.0], [68.4, 22.0], [68.5, 22.0], [68.6, 22.0], [68.7, 22.0], [68.8, 22.0], [68.9, 22.0], [69.0, 22.0], [69.1, 22.0], [69.2, 22.0], [69.3, 22.0], [69.4, 22.0], [69.5, 22.0], [69.6, 22.0], [69.7, 22.0], [69.8, 22.0], [69.9, 22.0], [70.0, 22.0], [70.1, 22.0], [70.2, 22.0], [70.3, 22.0], [70.4, 22.0], [70.5, 22.0], [70.6, 22.0], [70.7, 22.0], [70.8, 22.0], [70.9, 22.0], [71.0, 22.0], [71.1, 22.0], [71.2, 22.0], [71.3, 22.0], [71.4, 22.0], [71.5, 22.0], [71.6, 22.0], [71.7, 22.0], [71.8, 22.0], [71.9, 22.0], [72.0, 22.0], [72.1, 22.0], [72.2, 22.0], [72.3, 22.0], [72.4, 22.0], [72.5, 22.0], [72.6, 22.0], [72.7, 22.0], [72.8, 22.0], [72.9, 22.0], [73.0, 22.0], [73.1, 22.0], [73.2, 22.0], [73.3, 22.0], [73.4, 22.0], [73.5, 22.0], [73.6, 22.0], [73.7, 22.0], [73.8, 22.0], [73.9, 22.0], [74.0, 22.0], [74.1, 22.0], [74.2, 22.0], [74.3, 23.0], [74.4, 23.0], [74.5, 23.0], [74.6, 23.0], [74.7, 23.0], [74.8, 23.0], [74.9, 23.0], [75.0, 23.0], [75.1, 23.0], [75.2, 23.0], [75.3, 23.0], [75.4, 23.0], [75.5, 23.0], [75.6, 23.0], [75.7, 23.0], [75.8, 23.0], [75.9, 23.0], [76.0, 23.0], [76.1, 23.0], [76.2, 23.0], [76.3, 23.0], [76.4, 23.0], [76.5, 23.0], [76.6, 23.0], [76.7, 23.0], [76.8, 23.0], [76.9, 23.0], [77.0, 23.0], [77.1, 23.0], [77.2, 23.0], [77.3, 23.0], [77.4, 23.0], [77.5, 23.0], [77.6, 23.0], [77.7, 23.0], [77.8, 23.0], [77.9, 23.0], [78.0, 23.0], [78.1, 23.0], [78.2, 23.0], [78.3, 23.0], [78.4, 23.0], [78.5, 23.0], [78.6, 23.0], [78.7, 23.0], [78.8, 23.0], [78.9, 23.0], [79.0, 23.0], [79.1, 23.0], [79.2, 23.0], [79.3, 23.0], [79.4, 23.0], [79.5, 23.0], [79.6, 23.0], [79.7, 23.0], [79.8, 23.0], [79.9, 23.0], [80.0, 23.0], [80.1, 23.0], [80.2, 23.0], [80.3, 23.0], [80.4, 23.0], [80.5, 23.0], [80.6, 23.0], [80.7, 23.0], [80.8, 23.0], [80.9, 23.0], [81.0, 23.0], [81.1, 23.0], [81.2, 23.0], [81.3, 23.0], [81.4, 23.0], [81.5, 23.0], [81.6, 23.0], [81.7, 23.0], [81.8, 23.0], [81.9, 23.0], [82.0, 23.0], [82.1, 23.0], [82.2, 23.0], [82.3, 23.0], [82.4, 23.0], [82.5, 23.0], [82.6, 23.0], [82.7, 23.0], [82.8, 23.0], [82.9, 23.0], [83.0, 23.0], [83.1, 23.0], [83.2, 23.0], [83.3, 23.0], [83.4, 23.0], [83.5, 23.0], [83.6, 23.0], [83.7, 23.0], [83.8, 23.0], [83.9, 23.0], [84.0, 23.0], [84.1, 23.0], [84.2, 23.0], [84.3, 23.0], [84.4, 23.0], [84.5, 23.0], [84.6, 23.0], [84.7, 23.0], [84.8, 23.0], [84.9, 23.0], [85.0, 23.0], [85.1, 23.0], [85.2, 23.0], [85.3, 23.0], [85.4, 23.0], [85.5, 24.0], [85.6, 24.0], [85.7, 24.0], [85.8, 24.0], [85.9, 24.0], [86.0, 24.0], [86.1, 24.0], [86.2, 24.0], [86.3, 24.0], [86.4, 24.0], [86.5, 24.0], [86.6, 24.0], [86.7, 24.0], [86.8, 24.0], [86.9, 24.0], [87.0, 24.0], [87.1, 24.0], [87.2, 24.0], [87.3, 24.0], [87.4, 24.0], [87.5, 24.0], [87.6, 24.0], [87.7, 24.0], [87.8, 24.0], [87.9, 24.0], [88.0, 24.0], [88.1, 24.0], [88.2, 24.0], [88.3, 24.0], [88.4, 24.0], [88.5, 24.0], [88.6, 24.0], [88.7, 24.0], [88.8, 24.0], [88.9, 24.0], [89.0, 24.0], [89.1, 24.0], [89.2, 24.0], [89.3, 24.0], [89.4, 24.0], [89.5, 24.0], [89.6, 24.0], [89.7, 24.0], [89.8, 24.0], [89.9, 24.0], [90.0, 24.0], [90.1, 24.0], [90.2, 24.0], [90.3, 24.0], [90.4, 24.0], [90.5, 24.0], [90.6, 24.0], [90.7, 24.0], [90.8, 24.0], [90.9, 24.0], [91.0, 24.0], [91.1, 24.0], [91.2, 24.0], [91.3, 24.0], [91.4, 24.0], [91.5, 24.0], [91.6, 24.0], [91.7, 24.0], [91.8, 24.0], [91.9, 24.0], [92.0, 24.0], [92.1, 24.0], [92.2, 24.0], [92.3, 24.0], [92.4, 24.0], [92.5, 24.0], [92.6, 24.0], [92.7, 24.0], [92.8, 24.0], [92.9, 24.0], [93.0, 25.0], [93.1, 25.0], [93.2, 25.0], [93.3, 25.0], [93.4, 25.0], [93.5, 25.0], [93.6, 25.0], [93.7, 25.0], [93.8, 25.0], [93.9, 25.0], [94.0, 25.0], [94.1, 25.0], [94.2, 25.0], [94.3, 25.0], [94.4, 25.0], [94.5, 25.0], [94.6, 25.0], [94.7, 25.0], [94.8, 25.0], [94.9, 25.0], [95.0, 25.0], [95.1, 25.0], [95.2, 25.0], [95.3, 25.0], [95.4, 25.0], [95.5, 25.0], [95.6, 25.0], [95.7, 25.0], [95.8, 25.0], [95.9, 25.0], [96.0, 25.0], [96.1, 25.0], [96.2, 25.0], [96.3, 25.0], [96.4, 25.0], [96.5, 25.0], [96.6, 25.0], [96.7, 25.0], [96.8, 25.0], [96.9, 25.0], [97.0, 25.0], [97.1, 25.0], [97.2, 25.0], [97.3, 25.0], [97.4, 25.0], [97.5, 26.0], [97.6, 26.0], [97.7, 26.0], [97.8, 26.0], [97.9, 26.0], [98.0, 26.0], [98.1, 26.0], [98.2, 26.0], [98.3, 26.0], [98.4, 26.0], [98.5, 26.0], [98.6, 26.0], [98.7, 26.0], [98.8, 26.0], [98.9, 26.0], [99.0, 26.0], [99.1, 27.0], [99.2, 27.0], [99.3, 27.0], [99.4, 27.0], [99.5, 27.0], [99.6, 27.0], [99.7, 28.0], [99.8, 28.0], [99.9, 29.0], [100.0, 124.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 99995.0, "series": [{"data": [[0.0, 99995.0], [100.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.971044045676987, "minX": 1.7185449E12, "maxY": 70.6343206251886, "series": [{"data": [[1.7185449E12, 13.971044045676987], [1.71854496E12, 70.6343206251886]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71854496E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.0, "maxY": 25.23607748184021, "series": [{"data": [[2.0, 1.825], [3.0, 1.6666666666666667], [4.0, 1.7489361702127657], [5.0, 1.7773851590106016], [6.0, 1.8524096385542166], [7.0, 2.02445652173913], [8.0, 2.354223433242506], [9.0, 2.587601078167116], [10.0, 2.7424999999999997], [11.0, 2.980722891566265], [12.0, 3.3797468354430396], [13.0, 3.5857142857142854], [14.0, 3.8079625292740062], [15.0, 4.133802816901405], [16.0, 4.610294117647057], [17.0, 3.7280701754385994], [18.0, 5.65315315315315], [19.0, 5.541766109785196], [20.0, 5.6395604395604355], [21.0, 5.76141078838174], [22.0, 6.265168539325844], [23.0, 6.473568281938323], [24.0, 6.866000000000008], [25.0, 7.4226044226044205], [26.0, 7.695560253699782], [27.0, 7.947478991596635], [28.0, 8.129098360655734], [29.0, 9.168085106382973], [30.0, 8.777559055118115], [31.0, 8.689723320158112], [32.0, 8.918406072106269], [33.0, 8.96637168141594], [34.0, 8.758503401360537], [35.0, 9.000000000000012], [36.0, 9.465968586387442], [37.0, 9.777243589743591], [38.0, 9.98651685393258], [39.0, 10.29500580720093], [40.0, 10.449685534591197], [41.0, 10.666666666666677], [42.0, 10.932601880877744], [43.0, 11.735207100591715], [44.0, 12.029051987767566], [45.0, 11.785087719298273], [46.0, 12.070484581497789], [47.0, 12.564971751412438], [48.0, 12.697135061391535], [49.0, 12.327307326355841], [50.0, 14.552664188351931], [51.0, 13.662844036697257], [52.0, 13.961970613656009], [53.0, 14.23872950819671], [54.0, 14.549999999999999], [55.0, 14.218468468468457], [56.0, 15.091549295774655], [57.0, 14.908578584846596], [58.0, 15.0489977728285], [59.0, 15.191191191191185], [60.0, 15.458686440677953], [61.0, 16.112149532710283], [62.0, 16.965240641711222], [63.0, 16.59960552268243], [64.0, 16.576222435282865], [65.0, 16.995717344753757], [66.0, 17.150000000000016], [67.0, 17.414302600472773], [68.0, 17.95112781954886], [69.0, 18.313471502590648], [70.0, 18.860736747529167], [71.0, 18.8244766505636], [72.0, 19.169213355970534], [73.0, 19.322651933701653], [74.0, 19.357833655705946], [75.0, 19.680898876404555], [76.0, 20.01990632318501], [77.0, 21.07473982970672], [78.0, 20.676196808510674], [79.0, 20.716382853787444], [80.0, 20.83090221501891], [81.0, 21.945359930615794], [82.0, 21.84415094339622], [83.0, 21.982725527831096], [84.0, 22.263199214916565], [85.0, 22.310405643738942], [86.0, 22.21002979145979], [87.0, 22.248421052631596], [88.0, 23.06029106029105], [89.0, 22.753132026983675], [90.0, 23.841969653592884], [91.0, 23.70766434413818], [92.0, 24.270541958041946], [93.0, 24.103465595178335], [94.0, 25.23607748184021], [1.0, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[66.46617000000079, 17.5475299999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 94.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14221.6, "minX": 1.7185449E12, "maxY": 199184.6, "series": [{"data": [[1.7185449E12, 15815.4], [1.71854496E12, 199184.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7185449E12, 14221.6], [1.71854496E12, 179111.73333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71854496E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4.047308319738989, "minX": 1.7185449E12, "maxY": 18.619457277319285, "series": [{"data": [[1.7185449E12, 4.047308319738989], [1.71854496E12, 18.619457277319285]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71854496E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4.043501903208267, "minX": 1.7185449E12, "maxY": 18.61823755450977, "series": [{"data": [[1.7185449E12, 4.043501903208267], [1.71854496E12, 18.61823755450977]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71854496E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.289063511938122E-4, "minX": 1.7185449E12, "maxY": 0.004350190320826535, "series": [{"data": [[1.7185449E12, 0.004350190320826535], [1.71854496E12, 5.289063511938122E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71854496E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.7185449E12, "maxY": 124.0, "series": [{"data": [[1.7185449E12, 124.0], [1.71854496E12, 101.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7185449E12, 7.0], [1.71854496E12, 18.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7185449E12, 8.0], [1.71854496E12, 20.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7185449E12, 7.0], [1.71854496E12, 19.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7185449E12, 1.0], [1.71854496E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7185449E12, 4.0], [1.71854496E12, 14.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71854496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 515.0, "maxY": 25.0, "series": [{"data": [[515.0, 2.0], [2043.0, 5.0], [3368.0, 3.0], [3371.0, 9.0], [3473.0, 6.0], [3808.0, 15.0], [3716.0, 13.0], [3736.0, 10.0], [3738.0, 15.0], [3770.0, 17.0], [3743.0, 20.0], [3742.0, 21.0], [3778.0, 22.0], [3819.0, 24.0], [3768.0, 25.0], [3802.0, 24.0], [3804.0, 20.0], [3793.0, 22.0], [3779.0, 21.0], [3790.0, 13.0], [3821.0, 24.0], [3757.0, 24.0], [3754.0, 21.0], [3964.0, 22.0], [3916.0, 22.0], [3870.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3964.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 515.0, "maxY": 25.0, "series": [{"data": [[515.0, 2.0], [2043.0, 5.0], [3368.0, 3.0], [3371.0, 9.0], [3473.0, 6.0], [3808.0, 15.0], [3716.0, 13.0], [3736.0, 10.0], [3738.0, 15.0], [3770.0, 17.0], [3743.0, 20.0], [3742.0, 21.0], [3778.0, 22.0], [3819.0, 24.0], [3768.0, 25.0], [3802.0, 24.0], [3804.0, 20.0], [3793.0, 22.0], [3779.0, 21.0], [3790.0, 13.0], [3821.0, 24.0], [3757.0, 24.0], [3754.0, 21.0], [3964.0, 22.0], [3916.0, 22.0], [3870.0, 15.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3964.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 123.01666666666667, "minX": 1.7185449E12, "maxY": 1543.65, "series": [{"data": [[1.7185449E12, 123.01666666666667], [1.71854496E12, 1543.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71854496E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 122.6, "minX": 1.7185449E12, "maxY": 1544.0666666666666, "series": [{"data": [[1.7185449E12, 122.6], [1.71854496E12, 1544.0666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71854496E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 122.6, "minX": 1.7185449E12, "maxY": 1544.0666666666666, "series": [{"data": [[1.7185449E12, 122.6], [1.71854496E12, 1544.0666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71854496E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 122.6, "minX": 1.7185449E12, "maxY": 1544.0666666666666, "series": [{"data": [[1.7185449E12, 122.6], [1.71854496E12, 1544.0666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71854496E12, "title": "Total Transactions Per Second"}},
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

