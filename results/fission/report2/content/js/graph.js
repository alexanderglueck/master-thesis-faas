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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 60007.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 3.0], [9.8, 3.0], [9.9, 3.0], [10.0, 3.0], [10.1, 3.0], [10.2, 3.0], [10.3, 3.0], [10.4, 3.0], [10.5, 3.0], [10.6, 3.0], [10.7, 3.0], [10.8, 3.0], [10.9, 3.0], [11.0, 3.0], [11.1, 3.0], [11.2, 3.0], [11.3, 3.0], [11.4, 3.0], [11.5, 3.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 3.0], [16.1, 3.0], [16.2, 3.0], [16.3, 3.0], [16.4, 3.0], [16.5, 3.0], [16.6, 3.0], [16.7, 3.0], [16.8, 3.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 4.0], [29.5, 4.0], [29.6, 4.0], [29.7, 4.0], [29.8, 4.0], [29.9, 4.0], [30.0, 4.0], [30.1, 4.0], [30.2, 4.0], [30.3, 4.0], [30.4, 4.0], [30.5, 4.0], [30.6, 4.0], [30.7, 4.0], [30.8, 4.0], [30.9, 4.0], [31.0, 4.0], [31.1, 4.0], [31.2, 4.0], [31.3, 4.0], [31.4, 4.0], [31.5, 4.0], [31.6, 4.0], [31.7, 4.0], [31.8, 4.0], [31.9, 4.0], [32.0, 4.0], [32.1, 4.0], [32.2, 4.0], [32.3, 4.0], [32.4, 4.0], [32.5, 4.0], [32.6, 4.0], [32.7, 4.0], [32.8, 4.0], [32.9, 4.0], [33.0, 4.0], [33.1, 4.0], [33.2, 4.0], [33.3, 4.0], [33.4, 4.0], [33.5, 4.0], [33.6, 4.0], [33.7, 4.0], [33.8, 4.0], [33.9, 4.0], [34.0, 4.0], [34.1, 4.0], [34.2, 4.0], [34.3, 4.0], [34.4, 4.0], [34.5, 4.0], [34.6, 4.0], [34.7, 4.0], [34.8, 4.0], [34.9, 4.0], [35.0, 4.0], [35.1, 4.0], [35.2, 4.0], [35.3, 4.0], [35.4, 4.0], [35.5, 4.0], [35.6, 4.0], [35.7, 4.0], [35.8, 4.0], [35.9, 4.0], [36.0, 4.0], [36.1, 4.0], [36.2, 4.0], [36.3, 4.0], [36.4, 4.0], [36.5, 4.0], [36.6, 4.0], [36.7, 4.0], [36.8, 4.0], [36.9, 4.0], [37.0, 4.0], [37.1, 4.0], [37.2, 4.0], [37.3, 4.0], [37.4, 4.0], [37.5, 4.0], [37.6, 4.0], [37.7, 4.0], [37.8, 4.0], [37.9, 4.0], [38.0, 4.0], [38.1, 4.0], [38.2, 4.0], [38.3, 4.0], [38.4, 4.0], [38.5, 4.0], [38.6, 4.0], [38.7, 4.0], [38.8, 4.0], [38.9, 4.0], [39.0, 4.0], [39.1, 4.0], [39.2, 4.0], [39.3, 4.0], [39.4, 4.0], [39.5, 4.0], [39.6, 4.0], [39.7, 4.0], [39.8, 4.0], [39.9, 4.0], [40.0, 4.0], [40.1, 4.0], [40.2, 4.0], [40.3, 4.0], [40.4, 4.0], [40.5, 4.0], [40.6, 4.0], [40.7, 4.0], [40.8, 4.0], [40.9, 4.0], [41.0, 4.0], [41.1, 4.0], [41.2, 4.0], [41.3, 4.0], [41.4, 4.0], [41.5, 4.0], [41.6, 4.0], [41.7, 4.0], [41.8, 4.0], [41.9, 4.0], [42.0, 4.0], [42.1, 4.0], [42.2, 4.0], [42.3, 4.0], [42.4, 4.0], [42.5, 4.0], [42.6, 4.0], [42.7, 4.0], [42.8, 4.0], [42.9, 4.0], [43.0, 4.0], [43.1, 4.0], [43.2, 4.0], [43.3, 4.0], [43.4, 4.0], [43.5, 4.0], [43.6, 4.0], [43.7, 4.0], [43.8, 4.0], [43.9, 4.0], [44.0, 4.0], [44.1, 4.0], [44.2, 4.0], [44.3, 4.0], [44.4, 4.0], [44.5, 4.0], [44.6, 4.0], [44.7, 4.0], [44.8, 4.0], [44.9, 4.0], [45.0, 4.0], [45.1, 4.0], [45.2, 4.0], [45.3, 4.0], [45.4, 4.0], [45.5, 4.0], [45.6, 4.0], [45.7, 4.0], [45.8, 4.0], [45.9, 4.0], [46.0, 4.0], [46.1, 4.0], [46.2, 4.0], [46.3, 4.0], [46.4, 4.0], [46.5, 4.0], [46.6, 4.0], [46.7, 4.0], [46.8, 4.0], [46.9, 4.0], [47.0, 4.0], [47.1, 4.0], [47.2, 4.0], [47.3, 4.0], [47.4, 4.0], [47.5, 4.0], [47.6, 4.0], [47.7, 4.0], [47.8, 4.0], [47.9, 4.0], [48.0, 4.0], [48.1, 4.0], [48.2, 4.0], [48.3, 4.0], [48.4, 4.0], [48.5, 4.0], [48.6, 4.0], [48.7, 4.0], [48.8, 4.0], [48.9, 4.0], [49.0, 4.0], [49.1, 4.0], [49.2, 4.0], [49.3, 4.0], [49.4, 4.0], [49.5, 4.0], [49.6, 4.0], [49.7, 4.0], [49.8, 4.0], [49.9, 4.0], [50.0, 4.0], [50.1, 4.0], [50.2, 4.0], [50.3, 4.0], [50.4, 4.0], [50.5, 4.0], [50.6, 4.0], [50.7, 4.0], [50.8, 4.0], [50.9, 4.0], [51.0, 4.0], [51.1, 4.0], [51.2, 4.0], [51.3, 4.0], [51.4, 4.0], [51.5, 4.0], [51.6, 4.0], [51.7, 4.0], [51.8, 4.0], [51.9, 4.0], [52.0, 4.0], [52.1, 4.0], [52.2, 4.0], [52.3, 4.0], [52.4, 4.0], [52.5, 4.0], [52.6, 4.0], [52.7, 4.0], [52.8, 4.0], [52.9, 4.0], [53.0, 4.0], [53.1, 4.0], [53.2, 4.0], [53.3, 4.0], [53.4, 4.0], [53.5, 4.0], [53.6, 4.0], [53.7, 4.0], [53.8, 4.0], [53.9, 4.0], [54.0, 4.0], [54.1, 4.0], [54.2, 4.0], [54.3, 4.0], [54.4, 4.0], [54.5, 4.0], [54.6, 4.0], [54.7, 4.0], [54.8, 4.0], [54.9, 4.0], [55.0, 4.0], [55.1, 4.0], [55.2, 4.0], [55.3, 4.0], [55.4, 4.0], [55.5, 4.0], [55.6, 4.0], [55.7, 4.0], [55.8, 4.0], [55.9, 4.0], [56.0, 4.0], [56.1, 4.0], [56.2, 4.0], [56.3, 4.0], [56.4, 4.0], [56.5, 4.0], [56.6, 4.0], [56.7, 4.0], [56.8, 4.0], [56.9, 4.0], [57.0, 4.0], [57.1, 4.0], [57.2, 4.0], [57.3, 4.0], [57.4, 4.0], [57.5, 4.0], [57.6, 4.0], [57.7, 4.0], [57.8, 4.0], [57.9, 4.0], [58.0, 4.0], [58.1, 4.0], [58.2, 4.0], [58.3, 4.0], [58.4, 4.0], [58.5, 4.0], [58.6, 4.0], [58.7, 4.0], [58.8, 4.0], [58.9, 4.0], [59.0, 4.0], [59.1, 4.0], [59.2, 4.0], [59.3, 4.0], [59.4, 4.0], [59.5, 4.0], [59.6, 4.0], [59.7, 4.0], [59.8, 4.0], [59.9, 4.0], [60.0, 4.0], [60.1, 4.0], [60.2, 4.0], [60.3, 4.0], [60.4, 4.0], [60.5, 4.0], [60.6, 4.0], [60.7, 4.0], [60.8, 4.0], [60.9, 4.0], [61.0, 4.0], [61.1, 4.0], [61.2, 4.0], [61.3, 4.0], [61.4, 4.0], [61.5, 4.0], [61.6, 4.0], [61.7, 4.0], [61.8, 4.0], [61.9, 4.0], [62.0, 4.0], [62.1, 4.0], [62.2, 4.0], [62.3, 4.0], [62.4, 5.0], [62.5, 5.0], [62.6, 5.0], [62.7, 5.0], [62.8, 5.0], [62.9, 5.0], [63.0, 5.0], [63.1, 5.0], [63.2, 5.0], [63.3, 5.0], [63.4, 5.0], [63.5, 5.0], [63.6, 5.0], [63.7, 5.0], [63.8, 5.0], [63.9, 5.0], [64.0, 5.0], [64.1, 5.0], [64.2, 5.0], [64.3, 5.0], [64.4, 5.0], [64.5, 5.0], [64.6, 5.0], [64.7, 5.0], [64.8, 5.0], [64.9, 5.0], [65.0, 5.0], [65.1, 5.0], [65.2, 5.0], [65.3, 5.0], [65.4, 5.0], [65.5, 5.0], [65.6, 5.0], [65.7, 5.0], [65.8, 5.0], [65.9, 5.0], [66.0, 5.0], [66.1, 5.0], [66.2, 5.0], [66.3, 5.0], [66.4, 5.0], [66.5, 5.0], [66.6, 5.0], [66.7, 5.0], [66.8, 5.0], [66.9, 5.0], [67.0, 5.0], [67.1, 5.0], [67.2, 5.0], [67.3, 5.0], [67.4, 5.0], [67.5, 5.0], [67.6, 5.0], [67.7, 5.0], [67.8, 5.0], [67.9, 5.0], [68.0, 5.0], [68.1, 5.0], [68.2, 5.0], [68.3, 5.0], [68.4, 5.0], [68.5, 5.0], [68.6, 5.0], [68.7, 5.0], [68.8, 5.0], [68.9, 5.0], [69.0, 5.0], [69.1, 5.0], [69.2, 5.0], [69.3, 5.0], [69.4, 5.0], [69.5, 5.0], [69.6, 5.0], [69.7, 5.0], [69.8, 5.0], [69.9, 5.0], [70.0, 5.0], [70.1, 5.0], [70.2, 5.0], [70.3, 5.0], [70.4, 5.0], [70.5, 5.0], [70.6, 5.0], [70.7, 5.0], [70.8, 5.0], [70.9, 5.0], [71.0, 5.0], [71.1, 5.0], [71.2, 5.0], [71.3, 5.0], [71.4, 5.0], [71.5, 5.0], [71.6, 5.0], [71.7, 5.0], [71.8, 5.0], [71.9, 5.0], [72.0, 5.0], [72.1, 5.0], [72.2, 5.0], [72.3, 5.0], [72.4, 5.0], [72.5, 5.0], [72.6, 5.0], [72.7, 5.0], [72.8, 5.0], [72.9, 5.0], [73.0, 5.0], [73.1, 5.0], [73.2, 5.0], [73.3, 5.0], [73.4, 5.0], [73.5, 5.0], [73.6, 5.0], [73.7, 5.0], [73.8, 5.0], [73.9, 5.0], [74.0, 5.0], [74.1, 5.0], [74.2, 5.0], [74.3, 5.0], [74.4, 5.0], [74.5, 5.0], [74.6, 5.0], [74.7, 5.0], [74.8, 5.0], [74.9, 5.0], [75.0, 5.0], [75.1, 5.0], [75.2, 5.0], [75.3, 5.0], [75.4, 5.0], [75.5, 5.0], [75.6, 5.0], [75.7, 5.0], [75.8, 5.0], [75.9, 5.0], [76.0, 5.0], [76.1, 5.0], [76.2, 5.0], [76.3, 5.0], [76.4, 5.0], [76.5, 5.0], [76.6, 5.0], [76.7, 5.0], [76.8, 5.0], [76.9, 5.0], [77.0, 5.0], [77.1, 5.0], [77.2, 5.0], [77.3, 5.0], [77.4, 5.0], [77.5, 5.0], [77.6, 5.0], [77.7, 5.0], [77.8, 5.0], [77.9, 5.0], [78.0, 5.0], [78.1, 5.0], [78.2, 5.0], [78.3, 5.0], [78.4, 5.0], [78.5, 5.0], [78.6, 5.0], [78.7, 5.0], [78.8, 6.0], [78.9, 6.0], [79.0, 6.0], [79.1, 6.0], [79.2, 6.0], [79.3, 6.0], [79.4, 6.0], [79.5, 6.0], [79.6, 6.0], [79.7, 6.0], [79.8, 6.0], [79.9, 6.0], [80.0, 6.0], [80.1, 6.0], [80.2, 6.0], [80.3, 6.0], [80.4, 6.0], [80.5, 6.0], [80.6, 6.0], [80.7, 6.0], [80.8, 6.0], [80.9, 6.0], [81.0, 6.0], [81.1, 6.0], [81.2, 6.0], [81.3, 6.0], [81.4, 6.0], [81.5, 6.0], [81.6, 6.0], [81.7, 6.0], [81.8, 6.0], [81.9, 6.0], [82.0, 6.0], [82.1, 6.0], [82.2, 6.0], [82.3, 6.0], [82.4, 6.0], [82.5, 6.0], [82.6, 6.0], [82.7, 6.0], [82.8, 6.0], [82.9, 6.0], [83.0, 6.0], [83.1, 6.0], [83.2, 6.0], [83.3, 6.0], [83.4, 6.0], [83.5, 6.0], [83.6, 6.0], [83.7, 6.0], [83.8, 6.0], [83.9, 6.0], [84.0, 6.0], [84.1, 6.0], [84.2, 6.0], [84.3, 6.0], [84.4, 6.0], [84.5, 6.0], [84.6, 6.0], [84.7, 6.0], [84.8, 6.0], [84.9, 6.0], [85.0, 6.0], [85.1, 6.0], [85.2, 6.0], [85.3, 6.0], [85.4, 6.0], [85.5, 6.0], [85.6, 6.0], [85.7, 6.0], [85.8, 6.0], [85.9, 6.0], [86.0, 6.0], [86.1, 6.0], [86.2, 6.0], [86.3, 6.0], [86.4, 6.0], [86.5, 6.0], [86.6, 6.0], [86.7, 6.0], [86.8, 6.0], [86.9, 6.0], [87.0, 6.0], [87.1, 6.0], [87.2, 6.0], [87.3, 6.0], [87.4, 7.0], [87.5, 7.0], [87.6, 7.0], [87.7, 7.0], [87.8, 7.0], [87.9, 7.0], [88.0, 7.0], [88.1, 7.0], [88.2, 7.0], [88.3, 7.0], [88.4, 7.0], [88.5, 7.0], [88.6, 7.0], [88.7, 7.0], [88.8, 7.0], [88.9, 7.0], [89.0, 7.0], [89.1, 7.0], [89.2, 7.0], [89.3, 7.0], [89.4, 7.0], [89.5, 7.0], [89.6, 7.0], [89.7, 7.0], [89.8, 7.0], [89.9, 7.0], [90.0, 7.0], [90.1, 7.0], [90.2, 7.0], [90.3, 7.0], [90.4, 7.0], [90.5, 7.0], [90.6, 7.0], [90.7, 7.0], [90.8, 7.0], [90.9, 7.0], [91.0, 7.0], [91.1, 7.0], [91.2, 7.0], [91.3, 7.0], [91.4, 7.0], [91.5, 7.0], [91.6, 7.0], [91.7, 7.0], [91.8, 7.0], [91.9, 7.0], [92.0, 7.0], [92.1, 7.0], [92.2, 7.0], [92.3, 7.0], [92.4, 8.0], [92.5, 8.0], [92.6, 8.0], [92.7, 8.0], [92.8, 8.0], [92.9, 8.0], [93.0, 8.0], [93.1, 8.0], [93.2, 8.0], [93.3, 8.0], [93.4, 8.0], [93.5, 8.0], [93.6, 8.0], [93.7, 8.0], [93.8, 8.0], [93.9, 8.0], [94.0, 8.0], [94.1, 8.0], [94.2, 8.0], [94.3, 8.0], [94.4, 8.0], [94.5, 8.0], [94.6, 8.0], [94.7, 8.0], [94.8, 8.0], [94.9, 8.0], [95.0, 8.0], [95.1, 8.0], [95.2, 8.0], [95.3, 8.0], [95.4, 9.0], [95.5, 9.0], [95.6, 9.0], [95.7, 9.0], [95.8, 9.0], [95.9, 9.0], [96.0, 9.0], [96.1, 9.0], [96.2, 9.0], [96.3, 9.0], [96.4, 9.0], [96.5, 9.0], [96.6, 9.0], [96.7, 9.0], [96.8, 9.0], [96.9, 9.0], [97.0, 10.0], [97.1, 10.0], [97.2, 10.0], [97.3, 10.0], [97.4, 10.0], [97.5, 10.0], [97.6, 10.0], [97.7, 10.0], [97.8, 10.0], [97.9, 10.0], [98.0, 10.0], [98.1, 11.0], [98.2, 11.0], [98.3, 11.0], [98.4, 11.0], [98.5, 11.0], [98.6, 11.0], [98.7, 11.0], [98.8, 11.0], [98.9, 12.0], [99.0, 12.0], [99.1, 12.0], [99.2, 12.0], [99.3, 13.0], [99.4, 13.0], [99.5, 14.0], [99.6, 14.0], [99.7, 15.0], [99.8, 18.0], [99.9, 1586.0], [100.0, 60007.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 99885.0, "series": [{"data": [[0.0, 99885.0], [600.0, 3.0], [700.0, 4.0], [1200.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1800.0, 1.0], [2300.0, 1.0], [2900.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [6000.0, 1.0], [6100.0, 2.0], [7800.0, 1.0], [8400.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9400.0, 1.0], [9600.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10200.0, 1.0], [11700.0, 1.0], [12000.0, 1.0], [11800.0, 1.0], [12100.0, 1.0], [12400.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [14400.0, 1.0], [14800.0, 1.0], [15300.0, 1.0], [16500.0, 1.0], [16900.0, 1.0], [20300.0, 1.0], [19500.0, 1.0], [19700.0, 1.0], [20100.0, 1.0], [21000.0, 1.0], [21300.0, 1.0], [21500.0, 1.0], [22500.0, 1.0], [22600.0, 1.0], [23500.0, 1.0], [100.0, 2.0], [27500.0, 1.0], [27400.0, 1.0], [28100.0, 1.0], [29200.0, 1.0], [28700.0, 1.0], [28800.0, 1.0], [30600.0, 1.0], [31500.0, 1.0], [31200.0, 1.0], [32200.0, 1.0], [33900.0, 2.0], [34200.0, 3.0], [35800.0, 1.0], [35000.0, 1.0], [36500.0, 1.0], [36600.0, 1.0], [38300.0, 1.0], [38700.0, 1.0], [39000.0, 2.0], [39400.0, 1.0], [42300.0, 1.0], [45000.0, 1.0], [44300.0, 1.0], [47000.0, 1.0], [45100.0, 1.0], [45500.0, 1.0], [45600.0, 1.0], [48000.0, 1.0], [49500.0, 1.0], [50800.0, 1.0], [52200.0, 1.0], [52300.0, 1.0], [56200.0, 1.0], [56800.0, 1.0], [58300.0, 1.0], [58000.0, 1.0], [59100.0, 1.0], [60000.0, 16.0], [300.0, 1.0], [400.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 99889.0, "series": [{"data": [[0.0, 99889.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 85.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 16.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.404727985041387, "minX": 1.71805074E12, "maxY": 65.93064046016143, "series": [{"data": [[1.71805074E12, 65.93064046016143], [1.7180508E12, 18.404727985041387]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.8991354466858805, "minX": 1.0, "maxY": 277.5795454545456, "series": [{"data": [[2.0, 4.420382165605094], [3.0, 3.879120879120877], [4.0, 3.7590909090909106], [5.0, 3.7099236641221363], [6.0, 4.335748792270527], [7.0, 4.24812030075188], [8.0, 4.525974025974024], [9.0, 63.99433865156975], [10.0, 3.827354260089685], [11.0, 4.010430247718384], [12.0, 46.94424841213827], [13.0, 6.638190954773872], [14.0, 4.937116564417177], [15.0, 52.256651017214374], [16.0, 109.86643233743413], [17.0, 152.0281690140845], [18.0, 4.695364238410596], [19.0, 277.5795454545456], [20.0, 3.35211267605634], [21.0, 44.73744139316815], [22.0, 4.5557324840764295], [23.0, 91.27386243386239], [24.0, 146.46375957572167], [25.0, 180.93959731543632], [26.0, 3.4461247637051047], [27.0, 78.20429252782202], [28.0, 7.523178807947019], [29.0, 42.69985029940131], [30.0, 46.67475035663336], [31.0, 99.47715196599354], [32.0, 3.5547785547785544], [33.0, 64.04146170063241], [34.0, 13.443181818181815], [35.0, 34.20886889460151], [36.0, 3.8658146964856206], [37.0, 3.951677852348995], [38.0, 108.67914438502672], [39.0, 3.853904282115872], [40.0, 3.9769230769230752], [41.0, 44.7158651188502], [42.0, 83.70983446932814], [43.0, 24.834254143646405], [44.0, 59.19883351007428], [45.0, 7.991803278688529], [46.0, 46.50704225352107], [47.0, 33.73189522342062], [48.0, 4.222222222222225], [49.0, 4.641025641025642], [50.0, 50.879234167893976], [51.0, 30.2498163115356], [52.0, 3.665615141955836], [53.0, 45.52705283259069], [54.0, 31.785777777777746], [55.0, 59.16260954235632], [56.0, 4.266917293233086], [57.0, 4.41984732824427], [58.0, 20.97794117647061], [59.0, 50.58845437616385], [60.0, 4.3790697674418615], [61.0, 58.50728476821192], [62.0, 4.118181818181817], [63.0, 51.29582929194957], [64.0, 4.215163934426225], [65.0, 21.957264957264968], [66.0, 32.602932551319675], [67.0, 79.72543352601154], [68.0, 4.727642276422762], [69.0, 16.7039513677811], [70.0, 7.4605263157894735], [71.0, 29.798490566037692], [72.0, 5.149122807017545], [73.0, 5.601398601398599], [74.0, 33.52944711538465], [75.0, 4.361386138613868], [76.0, 4.655172413793106], [77.0, 5.101415094339628], [78.0, 4.820312500000006], [79.0, 6.151515151515152], [80.0, 18.88224956063268], [81.0, 25.89456662354463], [82.0, 18.675496688741706], [83.0, 4.55936675461742], [84.0, 5.553921568627445], [85.0, 26.645046329294345], [86.0, 18.30526315789473], [87.0, 4.9852941176470615], [88.0, 5.0947002606429175], [89.0, 15.317813765182198], [90.0, 5.443127962085305], [91.0, 36.330926594464486], [92.0, 12.560995850622412], [93.0, 5.82588235294117], [94.0, 7.23846153846154], [95.0, 6.3544554455445565], [96.0, 22.77450980392156], [97.0, 7.409742120343841], [98.0, 15.870786516853935], [99.0, 12.004139072847732], [1.0, 2.8991354466858805]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[55.255360000000806, 36.04405000000015]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 99.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 45298.36666666667, "minX": 1.71805074E12, "maxY": 250706.2, "series": [{"data": [[1.71805074E12, 250706.2], [1.7180508E12, 72620.46666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71805074E12, 156368.3], [1.7180508E12, 45298.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 25.820371946658724, "minX": 1.71805074E12, "maxY": 71.33581159291224, "series": [{"data": [[1.71805074E12, 25.820371946658724], [1.7180508E12, 71.33581159291224]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 25.81752173128034, "minX": 1.71805074E12, "maxY": 71.33358561125473, "series": [{"data": [[1.71805074E12, 25.81752173128034], [1.7180508E12, 71.33358561125473]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8.458730300062395E-4, "minX": 1.71805074E12, "maxY": 0.001057545977456214, "series": [{"data": [[1.71805074E12, 0.001057545977456214], [1.7180508E12, 8.458730300062395E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.71805074E12, "maxY": 59167.0, "series": [{"data": [[1.71805074E12, 48021.0], [1.7180508E12, 59167.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71805074E12, 5.0], [1.7180508E12, 6.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71805074E12, 7.0], [1.7180508E12, 10.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71805074E12, 5.0], [1.7180508E12, 7.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71805074E12, 2.0], [1.7180508E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71805074E12, 3.0], [1.7180508E12, 4.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180508E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 46.0, "maxY": 60007.0, "series": [{"data": [[522.0, 3.0], [555.0, 4.0], [594.0, 3.0], [641.0, 3.0], [756.0, 3.0], [749.0, 3.0], [736.0, 4.0], [862.0, 3.0], [851.0, 3.0], [856.0, 4.0], [879.0, 3.0], [905.0, 3.0], [952.0, 3.0], [969.0, 3.0], [999.0, 4.0], [1018.0, 3.0], [1058.0, 3.0], [1078.0, 4.0], [1047.0, 3.0], [1101.0, 3.0], [1105.0, 3.0], [1139.0, 3.0], [1089.0, 3.0], [1154.0, 4.0], [1195.0, 3.0], [1200.0, 3.0], [1208.0, 4.0], [1249.0, 4.0], [1227.0, 3.0], [1237.0, 4.0], [1242.0, 4.0], [1287.0, 4.0], [1339.0, 4.0], [1299.0, 4.0], [1315.0, 4.0], [1326.0, 4.0], [1396.0, 4.0], [1346.0, 4.0], [1357.0, 4.0], [1352.0, 4.0], [1393.0, 4.0], [1466.0, 4.0], [1570.0, 7.0], [1609.0, 4.0], [1722.0, 4.0], [1673.0, 4.0], [1687.0, 4.0], [1768.0, 5.0], [1744.0, 4.0], [1746.0, 4.0], [1846.0, 4.5], [1801.0, 5.0], [1873.0, 5.0], [1971.0, 4.0], [2045.0, 4.0], [2096.0, 6.0], [2115.0, 6.0], [2110.0, 5.0], [2100.0, 5.0], [2122.0, 4.0], [2174.0, 5.0], [2210.0, 6.0], [2302.0, 6.0], [2258.0, 6.0], [2267.0, 5.0], [2397.0, 6.0], [2473.0, 6.0], [46.0, 3.0], [379.0, 3.0], [418.0, 4.0], [459.0, 3.0], [511.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2100.0, 60007.0], [2122.0, 60003.0], [2174.0, 60003.0], [555.0, 60002.0], [2267.0, 60002.0], [856.0, 60001.5], [1673.0, 60003.0], [1873.0, 60004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2473.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 46.0, "maxY": 60007.0, "series": [{"data": [[522.0, 3.0], [555.0, 4.0], [594.0, 3.0], [641.0, 3.0], [756.0, 3.0], [749.0, 3.0], [736.0, 4.0], [862.0, 3.0], [851.0, 3.0], [856.0, 4.0], [879.0, 3.0], [905.0, 3.0], [952.0, 3.0], [969.0, 3.0], [999.0, 4.0], [1018.0, 3.0], [1058.0, 3.0], [1078.0, 3.0], [1047.0, 3.0], [1101.0, 3.0], [1105.0, 3.0], [1139.0, 3.0], [1089.0, 3.0], [1154.0, 4.0], [1195.0, 3.0], [1200.0, 3.0], [1208.0, 4.0], [1249.0, 4.0], [1227.0, 3.0], [1237.0, 4.0], [1242.0, 3.5], [1287.0, 4.0], [1339.0, 4.0], [1299.0, 4.0], [1315.0, 4.0], [1326.0, 4.0], [1396.0, 4.0], [1346.0, 4.0], [1357.0, 4.0], [1352.0, 4.0], [1393.0, 4.0], [1466.0, 4.0], [1570.0, 7.0], [1609.0, 4.0], [1722.0, 4.0], [1673.0, 4.0], [1687.0, 4.0], [1768.0, 5.0], [1744.0, 4.0], [1746.0, 4.0], [1846.0, 4.0], [1801.0, 5.0], [1873.0, 5.0], [1971.0, 4.0], [2045.0, 4.0], [2096.0, 6.0], [2115.0, 6.0], [2110.0, 5.0], [2100.0, 5.0], [2122.0, 4.0], [2174.0, 5.0], [2210.0, 6.0], [2302.0, 6.0], [2258.0, 6.0], [2267.0, 5.0], [2397.0, 6.0], [2473.0, 6.0], [46.0, 3.0], [379.0, 3.0], [418.0, 4.0], [459.0, 3.0], [511.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2100.0, 60007.0], [2122.0, 60003.0], [2174.0, 60003.0], [555.0, 60002.0], [2267.0, 60002.0], [856.0, 60001.5], [1673.0, 60003.0], [1873.0, 60004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2473.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 373.8666666666667, "minX": 1.71805074E12, "maxY": 1292.8, "series": [{"data": [[1.71805074E12, 1292.8], [1.7180508E12, 373.8666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180508E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71805074E12, "maxY": 1292.3, "series": [{"data": [[1.71805074E12, 1292.3], [1.7180508E12, 374.1]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7180508E12, 0.26666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7180508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71805074E12, "maxY": 1292.3, "series": [{"data": [[1.71805074E12, 1292.3], [1.7180508E12, 374.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7180508E12, 0.26666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.71805074E12, "maxY": 1292.3, "series": [{"data": [[1.71805074E12, 1292.3], [1.7180508E12, 374.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7180508E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7180508E12, "title": "Total Transactions Per Second"}},
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

