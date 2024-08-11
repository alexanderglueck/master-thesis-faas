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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 131.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 5.0], [0.3, 6.0], [0.4, 7.0], [0.5, 8.0], [0.6, 10.0], [0.7, 11.0], [0.8, 12.0], [0.9, 13.0], [1.0, 14.0], [1.1, 15.0], [1.2, 16.0], [1.3, 17.0], [1.4, 17.0], [1.5, 19.0], [1.6, 20.0], [1.7, 21.0], [1.8, 22.0], [1.9, 23.0], [2.0, 24.0], [2.1, 25.0], [2.2, 26.0], [2.3, 27.0], [2.4, 28.0], [2.5, 29.0], [2.6, 30.0], [2.7, 30.0], [2.8, 31.0], [2.9, 32.0], [3.0, 33.0], [3.1, 34.0], [3.2, 34.0], [3.3, 35.0], [3.4, 36.0], [3.5, 37.0], [3.6, 38.0], [3.7, 39.0], [3.8, 39.0], [3.9, 40.0], [4.0, 42.0], [4.1, 43.0], [4.2, 43.0], [4.3, 44.0], [4.4, 44.0], [4.5, 45.0], [4.6, 45.0], [4.7, 46.0], [4.8, 46.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 49.0], [5.3, 49.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 53.0], [5.9, 53.0], [6.0, 54.0], [6.1, 55.0], [6.2, 55.0], [6.3, 56.0], [6.4, 56.0], [6.5, 57.0], [6.6, 57.0], [6.7, 58.0], [6.8, 58.0], [6.9, 59.0], [7.0, 59.0], [7.1, 60.0], [7.2, 60.0], [7.3, 60.0], [7.4, 61.0], [7.5, 61.0], [7.6, 62.0], [7.7, 63.0], [7.8, 64.0], [7.9, 64.0], [8.0, 65.0], [8.1, 65.0], [8.2, 66.0], [8.3, 66.0], [8.4, 66.0], [8.5, 67.0], [8.6, 68.0], [8.7, 68.0], [8.8, 69.0], [8.9, 69.0], [9.0, 69.0], [9.1, 70.0], [9.2, 70.0], [9.3, 70.0], [9.4, 71.0], [9.5, 71.0], [9.6, 71.0], [9.7, 71.0], [9.8, 72.0], [9.9, 72.0], [10.0, 72.0], [10.1, 73.0], [10.2, 73.0], [10.3, 74.0], [10.4, 74.0], [10.5, 74.0], [10.6, 75.0], [10.7, 75.0], [10.8, 76.0], [10.9, 76.0], [11.0, 76.0], [11.1, 77.0], [11.2, 77.0], [11.3, 78.0], [11.4, 78.0], [11.5, 78.0], [11.6, 79.0], [11.7, 79.0], [11.8, 79.0], [11.9, 80.0], [12.0, 80.0], [12.1, 80.0], [12.2, 81.0], [12.3, 81.0], [12.4, 81.0], [12.5, 82.0], [12.6, 82.0], [12.7, 82.0], [12.8, 83.0], [12.9, 83.0], [13.0, 83.0], [13.1, 84.0], [13.2, 84.0], [13.3, 84.0], [13.4, 84.0], [13.5, 85.0], [13.6, 85.0], [13.7, 85.0], [13.8, 85.0], [13.9, 85.0], [14.0, 85.0], [14.1, 85.0], [14.2, 86.0], [14.3, 86.0], [14.4, 86.0], [14.5, 86.0], [14.6, 86.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 87.0], [15.1, 87.0], [15.2, 88.0], [15.3, 88.0], [15.4, 88.0], [15.5, 88.0], [15.6, 89.0], [15.7, 89.0], [15.8, 89.0], [15.9, 89.0], [16.0, 90.0], [16.1, 90.0], [16.2, 90.0], [16.3, 90.0], [16.4, 90.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 91.0], [16.9, 91.0], [17.0, 91.0], [17.1, 91.0], [17.2, 91.0], [17.3, 91.0], [17.4, 92.0], [17.5, 92.0], [17.6, 92.0], [17.7, 92.0], [17.8, 92.0], [17.9, 93.0], [18.0, 93.0], [18.1, 93.0], [18.2, 93.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 94.0], [18.7, 94.0], [18.8, 94.0], [18.9, 94.0], [19.0, 94.0], [19.1, 94.0], [19.2, 94.0], [19.3, 94.0], [19.4, 95.0], [19.5, 95.0], [19.6, 95.0], [19.7, 95.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 95.0], [20.2, 95.0], [20.3, 96.0], [20.4, 96.0], [20.5, 96.0], [20.6, 96.0], [20.7, 96.0], [20.8, 96.0], [20.9, 96.0], [21.0, 97.0], [21.1, 97.0], [21.2, 97.0], [21.3, 97.0], [21.4, 97.0], [21.5, 97.0], [21.6, 97.0], [21.7, 97.0], [21.8, 98.0], [21.9, 98.0], [22.0, 98.0], [22.1, 98.0], [22.2, 98.0], [22.3, 98.0], [22.4, 98.0], [22.5, 98.0], [22.6, 98.0], [22.7, 98.0], [22.8, 99.0], [22.9, 99.0], [23.0, 99.0], [23.1, 99.0], [23.2, 99.0], [23.3, 99.0], [23.4, 99.0], [23.5, 99.0], [23.6, 99.0], [23.7, 99.0], [23.8, 99.0], [23.9, 99.0], [24.0, 99.0], [24.1, 100.0], [24.2, 100.0], [24.3, 100.0], [24.4, 100.0], [24.5, 100.0], [24.6, 100.0], [24.7, 100.0], [24.8, 100.0], [24.9, 100.0], [25.0, 100.0], [25.1, 100.0], [25.2, 100.0], [25.3, 100.0], [25.4, 101.0], [25.5, 101.0], [25.6, 101.0], [25.7, 101.0], [25.8, 101.0], [25.9, 101.0], [26.0, 101.0], [26.1, 101.0], [26.2, 101.0], [26.3, 101.0], [26.4, 101.0], [26.5, 101.0], [26.6, 101.0], [26.7, 101.0], [26.8, 101.0], [26.9, 102.0], [27.0, 102.0], [27.1, 102.0], [27.2, 102.0], [27.3, 102.0], [27.4, 102.0], [27.5, 102.0], [27.6, 102.0], [27.7, 102.0], [27.8, 102.0], [27.9, 102.0], [28.0, 102.0], [28.1, 102.0], [28.2, 102.0], [28.3, 102.0], [28.4, 102.0], [28.5, 102.0], [28.6, 102.0], [28.7, 102.0], [28.8, 102.0], [28.9, 102.0], [29.0, 102.0], [29.1, 102.0], [29.2, 103.0], [29.3, 103.0], [29.4, 103.0], [29.5, 103.0], [29.6, 103.0], [29.7, 103.0], [29.8, 103.0], [29.9, 103.0], [30.0, 103.0], [30.1, 103.0], [30.2, 103.0], [30.3, 103.0], [30.4, 103.0], [30.5, 103.0], [30.6, 103.0], [30.7, 103.0], [30.8, 103.0], [30.9, 103.0], [31.0, 103.0], [31.1, 103.0], [31.2, 103.0], [31.3, 104.0], [31.4, 104.0], [31.5, 104.0], [31.6, 104.0], [31.7, 104.0], [31.8, 104.0], [31.9, 104.0], [32.0, 104.0], [32.1, 104.0], [32.2, 104.0], [32.3, 104.0], [32.4, 104.0], [32.5, 104.0], [32.6, 104.0], [32.7, 104.0], [32.8, 104.0], [32.9, 104.0], [33.0, 104.0], [33.1, 104.0], [33.2, 104.0], [33.3, 104.0], [33.4, 104.0], [33.5, 104.0], [33.6, 104.0], [33.7, 104.0], [33.8, 104.0], [33.9, 104.0], [34.0, 104.0], [34.1, 104.0], [34.2, 104.0], [34.3, 104.0], [34.4, 104.0], [34.5, 104.0], [34.6, 104.0], [34.7, 104.0], [34.8, 104.0], [34.9, 104.0], [35.0, 104.0], [35.1, 104.0], [35.2, 104.0], [35.3, 104.0], [35.4, 104.0], [35.5, 104.0], [35.6, 104.0], [35.7, 105.0], [35.8, 105.0], [35.9, 105.0], [36.0, 105.0], [36.1, 105.0], [36.2, 105.0], [36.3, 105.0], [36.4, 105.0], [36.5, 105.0], [36.6, 105.0], [36.7, 105.0], [36.8, 105.0], [36.9, 105.0], [37.0, 105.0], [37.1, 105.0], [37.2, 105.0], [37.3, 105.0], [37.4, 105.0], [37.5, 105.0], [37.6, 105.0], [37.7, 105.0], [37.8, 105.0], [37.9, 105.0], [38.0, 105.0], [38.1, 105.0], [38.2, 105.0], [38.3, 105.0], [38.4, 105.0], [38.5, 105.0], [38.6, 105.0], [38.7, 105.0], [38.8, 105.0], [38.9, 105.0], [39.0, 105.0], [39.1, 105.0], [39.2, 105.0], [39.3, 105.0], [39.4, 105.0], [39.5, 105.0], [39.6, 105.0], [39.7, 105.0], [39.8, 105.0], [39.9, 105.0], [40.0, 105.0], [40.1, 105.0], [40.2, 105.0], [40.3, 105.0], [40.4, 105.0], [40.5, 105.0], [40.6, 105.0], [40.7, 105.0], [40.8, 105.0], [40.9, 105.0], [41.0, 105.0], [41.1, 105.0], [41.2, 105.0], [41.3, 105.0], [41.4, 105.0], [41.5, 105.0], [41.6, 105.0], [41.7, 105.0], [41.8, 105.0], [41.9, 105.0], [42.0, 105.0], [42.1, 105.0], [42.2, 105.0], [42.3, 105.0], [42.4, 105.0], [42.5, 105.0], [42.6, 105.0], [42.7, 105.0], [42.8, 105.0], [42.9, 105.0], [43.0, 105.0], [43.1, 105.0], [43.2, 105.0], [43.3, 105.0], [43.4, 105.0], [43.5, 105.0], [43.6, 105.0], [43.7, 105.0], [43.8, 105.0], [43.9, 105.0], [44.0, 105.0], [44.1, 105.0], [44.2, 105.0], [44.3, 105.0], [44.4, 105.0], [44.5, 105.0], [44.6, 105.0], [44.7, 105.0], [44.8, 105.0], [44.9, 105.0], [45.0, 105.0], [45.1, 105.0], [45.2, 105.0], [45.3, 105.0], [45.4, 105.0], [45.5, 105.0], [45.6, 105.0], [45.7, 105.0], [45.8, 105.0], [45.9, 105.0], [46.0, 105.0], [46.1, 105.0], [46.2, 105.0], [46.3, 105.0], [46.4, 105.0], [46.5, 105.0], [46.6, 105.0], [46.7, 105.0], [46.8, 105.0], [46.9, 105.0], [47.0, 105.0], [47.1, 105.0], [47.2, 105.0], [47.3, 105.0], [47.4, 105.0], [47.5, 105.0], [47.6, 105.0], [47.7, 105.0], [47.8, 105.0], [47.9, 105.0], [48.0, 105.0], [48.1, 105.0], [48.2, 105.0], [48.3, 105.0], [48.4, 105.0], [48.5, 105.0], [48.6, 105.0], [48.7, 105.0], [48.8, 105.0], [48.9, 105.0], [49.0, 105.0], [49.1, 105.0], [49.2, 105.0], [49.3, 105.0], [49.4, 105.0], [49.5, 105.0], [49.6, 105.0], [49.7, 105.0], [49.8, 105.0], [49.9, 105.0], [50.0, 105.0], [50.1, 105.0], [50.2, 105.0], [50.3, 106.0], [50.4, 106.0], [50.5, 106.0], [50.6, 106.0], [50.7, 106.0], [50.8, 106.0], [50.9, 106.0], [51.0, 106.0], [51.1, 106.0], [51.2, 106.0], [51.3, 106.0], [51.4, 106.0], [51.5, 106.0], [51.6, 106.0], [51.7, 106.0], [51.8, 106.0], [51.9, 106.0], [52.0, 106.0], [52.1, 106.0], [52.2, 106.0], [52.3, 106.0], [52.4, 106.0], [52.5, 106.0], [52.6, 106.0], [52.7, 106.0], [52.8, 106.0], [52.9, 106.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 106.0], [53.7, 106.0], [53.8, 106.0], [53.9, 106.0], [54.0, 106.0], [54.1, 106.0], [54.2, 106.0], [54.3, 106.0], [54.4, 106.0], [54.5, 106.0], [54.6, 106.0], [54.7, 106.0], [54.8, 106.0], [54.9, 106.0], [55.0, 106.0], [55.1, 106.0], [55.2, 106.0], [55.3, 106.0], [55.4, 106.0], [55.5, 106.0], [55.6, 106.0], [55.7, 106.0], [55.8, 106.0], [55.9, 106.0], [56.0, 106.0], [56.1, 106.0], [56.2, 106.0], [56.3, 106.0], [56.4, 106.0], [56.5, 106.0], [56.6, 106.0], [56.7, 106.0], [56.8, 106.0], [56.9, 106.0], [57.0, 106.0], [57.1, 106.0], [57.2, 106.0], [57.3, 106.0], [57.4, 106.0], [57.5, 106.0], [57.6, 106.0], [57.7, 106.0], [57.8, 106.0], [57.9, 106.0], [58.0, 106.0], [58.1, 106.0], [58.2, 106.0], [58.3, 106.0], [58.4, 106.0], [58.5, 106.0], [58.6, 106.0], [58.7, 106.0], [58.8, 106.0], [58.9, 106.0], [59.0, 106.0], [59.1, 106.0], [59.2, 106.0], [59.3, 106.0], [59.4, 106.0], [59.5, 106.0], [59.6, 106.0], [59.7, 106.0], [59.8, 106.0], [59.9, 106.0], [60.0, 106.0], [60.1, 106.0], [60.2, 106.0], [60.3, 106.0], [60.4, 106.0], [60.5, 106.0], [60.6, 106.0], [60.7, 106.0], [60.8, 106.0], [60.9, 106.0], [61.0, 106.0], [61.1, 106.0], [61.2, 106.0], [61.3, 106.0], [61.4, 106.0], [61.5, 106.0], [61.6, 106.0], [61.7, 106.0], [61.8, 106.0], [61.9, 106.0], [62.0, 106.0], [62.1, 106.0], [62.2, 106.0], [62.3, 106.0], [62.4, 106.0], [62.5, 106.0], [62.6, 106.0], [62.7, 106.0], [62.8, 106.0], [62.9, 106.0], [63.0, 106.0], [63.1, 106.0], [63.2, 106.0], [63.3, 106.0], [63.4, 106.0], [63.5, 106.0], [63.6, 106.0], [63.7, 106.0], [63.8, 106.0], [63.9, 106.0], [64.0, 106.0], [64.1, 106.0], [64.2, 106.0], [64.3, 106.0], [64.4, 106.0], [64.5, 106.0], [64.6, 106.0], [64.7, 106.0], [64.8, 106.0], [64.9, 106.0], [65.0, 106.0], [65.1, 106.0], [65.2, 106.0], [65.3, 106.0], [65.4, 106.0], [65.5, 106.0], [65.6, 106.0], [65.7, 106.0], [65.8, 106.0], [65.9, 106.0], [66.0, 106.0], [66.1, 106.0], [66.2, 106.0], [66.3, 106.0], [66.4, 106.0], [66.5, 106.0], [66.6, 106.0], [66.7, 106.0], [66.8, 106.0], [66.9, 106.0], [67.0, 106.0], [67.1, 106.0], [67.2, 106.0], [67.3, 106.0], [67.4, 106.0], [67.5, 106.0], [67.6, 106.0], [67.7, 106.0], [67.8, 106.0], [67.9, 106.0], [68.0, 106.0], [68.1, 106.0], [68.2, 106.0], [68.3, 106.0], [68.4, 106.0], [68.5, 106.0], [68.6, 106.0], [68.7, 106.0], [68.8, 106.0], [68.9, 106.0], [69.0, 106.0], [69.1, 106.0], [69.2, 106.0], [69.3, 106.0], [69.4, 106.0], [69.5, 107.0], [69.6, 107.0], [69.7, 107.0], [69.8, 107.0], [69.9, 107.0], [70.0, 107.0], [70.1, 107.0], [70.2, 107.0], [70.3, 107.0], [70.4, 107.0], [70.5, 107.0], [70.6, 107.0], [70.7, 107.0], [70.8, 107.0], [70.9, 107.0], [71.0, 107.0], [71.1, 107.0], [71.2, 107.0], [71.3, 107.0], [71.4, 107.0], [71.5, 107.0], [71.6, 107.0], [71.7, 107.0], [71.8, 107.0], [71.9, 107.0], [72.0, 107.0], [72.1, 107.0], [72.2, 107.0], [72.3, 107.0], [72.4, 107.0], [72.5, 107.0], [72.6, 107.0], [72.7, 107.0], [72.8, 107.0], [72.9, 107.0], [73.0, 107.0], [73.1, 107.0], [73.2, 107.0], [73.3, 107.0], [73.4, 107.0], [73.5, 107.0], [73.6, 107.0], [73.7, 107.0], [73.8, 107.0], [73.9, 107.0], [74.0, 107.0], [74.1, 107.0], [74.2, 107.0], [74.3, 107.0], [74.4, 107.0], [74.5, 107.0], [74.6, 107.0], [74.7, 107.0], [74.8, 107.0], [74.9, 107.0], [75.0, 107.0], [75.1, 107.0], [75.2, 107.0], [75.3, 107.0], [75.4, 107.0], [75.5, 107.0], [75.6, 107.0], [75.7, 107.0], [75.8, 107.0], [75.9, 107.0], [76.0, 107.0], [76.1, 107.0], [76.2, 107.0], [76.3, 107.0], [76.4, 107.0], [76.5, 107.0], [76.6, 107.0], [76.7, 107.0], [76.8, 107.0], [76.9, 107.0], [77.0, 107.0], [77.1, 107.0], [77.2, 107.0], [77.3, 107.0], [77.4, 107.0], [77.5, 107.0], [77.6, 107.0], [77.7, 107.0], [77.8, 107.0], [77.9, 107.0], [78.0, 107.0], [78.1, 107.0], [78.2, 107.0], [78.3, 107.0], [78.4, 107.0], [78.5, 107.0], [78.6, 107.0], [78.7, 107.0], [78.8, 107.0], [78.9, 107.0], [79.0, 107.0], [79.1, 107.0], [79.2, 107.0], [79.3, 107.0], [79.4, 107.0], [79.5, 107.0], [79.6, 107.0], [79.7, 107.0], [79.8, 107.0], [79.9, 107.0], [80.0, 107.0], [80.1, 107.0], [80.2, 107.0], [80.3, 107.0], [80.4, 107.0], [80.5, 107.0], [80.6, 107.0], [80.7, 107.0], [80.8, 107.0], [80.9, 107.0], [81.0, 107.0], [81.1, 107.0], [81.2, 107.0], [81.3, 107.0], [81.4, 107.0], [81.5, 107.0], [81.6, 107.0], [81.7, 107.0], [81.8, 107.0], [81.9, 107.0], [82.0, 107.0], [82.1, 107.0], [82.2, 107.0], [82.3, 107.0], [82.4, 107.0], [82.5, 107.0], [82.6, 107.0], [82.7, 107.0], [82.8, 107.0], [82.9, 107.0], [83.0, 107.0], [83.1, 107.0], [83.2, 107.0], [83.3, 107.0], [83.4, 107.0], [83.5, 107.0], [83.6, 107.0], [83.7, 107.0], [83.8, 107.0], [83.9, 107.0], [84.0, 107.0], [84.1, 107.0], [84.2, 107.0], [84.3, 107.0], [84.4, 107.0], [84.5, 107.0], [84.6, 107.0], [84.7, 107.0], [84.8, 107.0], [84.9, 107.0], [85.0, 107.0], [85.1, 107.0], [85.2, 107.0], [85.3, 108.0], [85.4, 108.0], [85.5, 108.0], [85.6, 108.0], [85.7, 108.0], [85.8, 108.0], [85.9, 108.0], [86.0, 108.0], [86.1, 108.0], [86.2, 108.0], [86.3, 108.0], [86.4, 108.0], [86.5, 108.0], [86.6, 108.0], [86.7, 108.0], [86.8, 108.0], [86.9, 108.0], [87.0, 108.0], [87.1, 108.0], [87.2, 108.0], [87.3, 108.0], [87.4, 108.0], [87.5, 108.0], [87.6, 108.0], [87.7, 108.0], [87.8, 108.0], [87.9, 108.0], [88.0, 108.0], [88.1, 108.0], [88.2, 108.0], [88.3, 108.0], [88.4, 108.0], [88.5, 108.0], [88.6, 108.0], [88.7, 108.0], [88.8, 108.0], [88.9, 108.0], [89.0, 108.0], [89.1, 108.0], [89.2, 108.0], [89.3, 108.0], [89.4, 108.0], [89.5, 108.0], [89.6, 108.0], [89.7, 108.0], [89.8, 108.0], [89.9, 108.0], [90.0, 108.0], [90.1, 108.0], [90.2, 108.0], [90.3, 108.0], [90.4, 108.0], [90.5, 108.0], [90.6, 108.0], [90.7, 108.0], [90.8, 108.0], [90.9, 108.0], [91.0, 108.0], [91.1, 108.0], [91.2, 108.0], [91.3, 108.0], [91.4, 108.0], [91.5, 108.0], [91.6, 108.0], [91.7, 108.0], [91.8, 108.0], [91.9, 108.0], [92.0, 108.0], [92.1, 108.0], [92.2, 108.0], [92.3, 108.0], [92.4, 108.0], [92.5, 108.0], [92.6, 108.0], [92.7, 108.0], [92.8, 108.0], [92.9, 108.0], [93.0, 108.0], [93.1, 108.0], [93.2, 108.0], [93.3, 108.0], [93.4, 108.0], [93.5, 108.0], [93.6, 108.0], [93.7, 108.0], [93.8, 108.0], [93.9, 108.0], [94.0, 108.0], [94.1, 108.0], [94.2, 108.0], [94.3, 109.0], [94.4, 109.0], [94.5, 109.0], [94.6, 109.0], [94.7, 109.0], [94.8, 109.0], [94.9, 109.0], [95.0, 109.0], [95.1, 109.0], [95.2, 109.0], [95.3, 109.0], [95.4, 109.0], [95.5, 109.0], [95.6, 109.0], [95.7, 109.0], [95.8, 109.0], [95.9, 109.0], [96.0, 109.0], [96.1, 109.0], [96.2, 109.0], [96.3, 109.0], [96.4, 109.0], [96.5, 109.0], [96.6, 109.0], [96.7, 109.0], [96.8, 109.0], [96.9, 109.0], [97.0, 109.0], [97.1, 109.0], [97.2, 109.0], [97.3, 109.0], [97.4, 109.0], [97.5, 109.0], [97.6, 109.0], [97.7, 109.0], [97.8, 109.0], [97.9, 110.0], [98.0, 110.0], [98.1, 110.0], [98.2, 110.0], [98.3, 110.0], [98.4, 110.0], [98.5, 110.0], [98.6, 110.0], [98.7, 110.0], [98.8, 110.0], [98.9, 110.0], [99.0, 111.0], [99.1, 111.0], [99.2, 111.0], [99.3, 112.0], [99.4, 112.0], [99.5, 113.0], [99.6, 115.0], [99.7, 118.0], [99.8, 120.0], [99.9, 122.0], [100.0, 131.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 24067.0, "minX": 0.0, "maxY": 75933.0, "series": [{"data": [[0.0, 24067.0], [100.0, 75933.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.35213675213678, "minX": 1.71865356E12, "maxY": 95.6558368969256, "series": [{"data": [[1.71865362E12, 95.6558368969256], [1.71865368E12, 46.35213675213678], [1.71865356E12, 89.34074203274133]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865368E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.467532467532467, "minX": 1.0, "maxY": 107.59722222222226, "series": [{"data": [[2.0, 2.467532467532467], [3.0, 3.6202531645569604], [4.0, 4.58426966292135], [5.0, 5.700000000000003], [6.0, 6.9010989010989015], [7.0, 7.978494623655913], [8.0, 9.886363636363638], [9.0, 10.614583333333336], [10.0, 11.60416666666667], [11.0, 12.622448979591832], [12.0, 13.358695652173912], [13.0, 14.451923076923078], [14.0, 15.87735849056604], [15.0, 16.464285714285715], [16.0, 17.69724770642202], [17.0, 19.210084033613438], [18.0, 17.787878787878793], [19.0, 22.438596491228072], [20.0, 22.401960784313726], [21.0, 23.567567567567572], [22.0, 24.238938053097346], [23.0, 26.06086956521739], [24.0, 26.544117647058815], [25.0, 27.456140350877185], [26.0, 28.53097345132744], [27.0, 30.050847457627118], [28.0, 30.54135338345865], [29.0, 31.29285714285713], [30.0, 32.84745762711863], [31.0, 33.73333333333332], [32.0, 34.843537414966], [33.0, 36.6279069767442], [34.0, 37.98540145985402], [35.0, 38.21739130434782], [36.0, 39.28888888888891], [37.0, 41.56081081081082], [38.0, 42.55395683453238], [39.0, 43.795918367346935], [40.0, 44.118055555555564], [41.0, 44.541401273885356], [42.0, 45.5578231292517], [43.0, 46.80473372781065], [44.0, 48.17177914110429], [45.0, 49.4698795180723], [46.0, 49.53293413173655], [47.0, 50.87150837988826], [48.0, 52.6219512195122], [49.0, 54.11111111111114], [50.0, 52.079365079365076], [51.0, 55.760456273764255], [52.0, 56.97252747252744], [53.0, 56.71428571428572], [54.0, 57.87113402061853], [55.0, 59.36434108527133], [56.0, 59.84859154929574], [57.0, 61.43693693693694], [58.0, 62.444976076554994], [59.0, 63.5406698564593], [60.0, 65.66265060240963], [61.0, 65.65870307167238], [62.0, 67.72925764192135], [63.0, 68.22666666666667], [64.0, 69.60147601476014], [65.0, 70.39325842696627], [66.0, 70.75820895522392], [67.0, 71.89416058394161], [68.0, 72.3013698630137], [69.0, 73.0], [70.0, 75.39153439153442], [71.0, 76.50666666666665], [72.0, 77.39067055393583], [73.0, 78.8741721854305], [74.0, 81.15942028985502], [75.0, 81.7110091743119], [76.0, 81.68796992481197], [77.0, 83.6954177897574], [78.0, 84.55971896955495], [79.0, 84.89108910891093], [80.0, 85.47851002865329], [81.0, 85.84479717813058], [82.0, 88.88292682926826], [83.0, 89.61837837837842], [84.0, 89.7600732600732], [85.0, 90.42238267148021], [86.0, 91.67567567567575], [87.0, 94.23417721518987], [88.0, 94.56113138686146], [89.0, 95.58603491271819], [90.0, 95.87516254876458], [91.0, 96.16034985422735], [92.0, 98.1036184210527], [93.0, 98.78470948012236], [94.0, 100.39734636871512], [95.0, 101.12426805465174], [96.0, 102.1214713430284], [97.0, 102.95705244122969], [98.0, 104.84773857447321], [99.0, 107.59722222222226], [100.0, 106.60711308259802], [1.0, 8.25]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[91.39085000000047, 97.58491999999947]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6669.0, "minX": 1.71865356E12, "maxY": 223549.43333333332, "series": [{"data": [[1.71865362E12, 223549.43333333332], [1.71865368E12, 13923.0], [1.71865356E12, 159194.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71865362E12, 107078.3], [1.71865368E12, 6669.0], [1.71865356E12, 76252.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865368E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 49.860968660968744, "minX": 1.71865356E12, "maxY": 101.88762709157682, "series": [{"data": [[1.71865362E12, 101.88762709157682], [1.71865368E12, 49.860968660968744], [1.71865356E12, 95.71671691625356]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865368E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 49.85954415954417, "minX": 1.71865356E12, "maxY": 101.88658019411983, "series": [{"data": [[1.71865362E12, 101.88658019411983], [1.71865368E12, 49.85954415954417], [1.71865356E12, 95.71509730147329]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865368E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71865356E12, "maxY": 0.0017192833827523466, "series": [{"data": [[1.71865362E12, 9.759213584825192E-4], [1.71865368E12, 0.0], [1.71865356E12, 0.0017192833827523466]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865368E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.71865356E12, "maxY": 131.0, "series": [{"data": [[1.71865362E12, 116.0], [1.71865368E12, 70.0], [1.71865356E12, 131.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71865362E12, 103.0], [1.71865368E12, 66.0], [1.71865356E12, 108.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71865362E12, 105.0], [1.71865368E12, 69.0], [1.71865356E12, 110.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71865362E12, 104.0], [1.71865368E12, 68.0], [1.71865356E12, 109.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71865362E12, 68.0], [1.71865368E12, 2.0], [1.71865356E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71865362E12, 97.0], [1.71865368E12, 54.0], [1.71865356E12, 106.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865368E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4.0, "minX": 263.0, "maxY": 109.0, "series": [{"data": [[689.0, 27.0], [856.0, 11.0], [889.0, 22.0], [894.0, 66.0], [891.0, 45.0], [880.0, 109.0], [902.0, 59.0], [899.0, 75.0], [898.0, 87.5], [918.0, 108.0], [924.0, 108.0], [930.0, 107.0], [940.0, 101.0], [939.0, 106.0], [931.0, 107.0], [938.0, 94.0], [936.0, 105.0], [937.0, 106.0], [932.0, 107.0], [934.0, 107.0], [933.0, 107.0], [935.0, 106.0], [947.0, 106.0], [948.0, 105.0], [949.0, 102.0], [950.0, 105.0], [946.0, 105.0], [945.0, 101.5], [944.0, 106.0], [941.0, 106.0], [943.0, 105.0], [929.0, 107.0], [928.0, 108.0], [942.0, 103.0], [263.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 950.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4.0, "minX": 263.0, "maxY": 109.0, "series": [{"data": [[689.0, 27.0], [856.0, 11.0], [889.0, 22.0], [894.0, 66.0], [891.0, 45.0], [880.0, 109.0], [902.0, 59.0], [899.0, 75.0], [898.0, 87.5], [918.0, 108.0], [924.0, 108.0], [930.0, 107.0], [940.0, 101.0], [939.0, 106.0], [931.0, 107.0], [938.0, 94.0], [936.0, 105.0], [937.0, 106.0], [932.0, 107.0], [934.0, 107.0], [933.0, 107.0], [935.0, 106.0], [947.0, 106.0], [948.0, 105.0], [949.0, 102.0], [950.0, 105.0], [946.0, 105.0], [945.0, 101.5], [944.0, 106.0], [941.0, 106.0], [943.0, 105.0], [929.0, 107.0], [928.0, 108.0], [942.0, 103.0], [263.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 950.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 57.45, "minX": 1.71865356E12, "maxY": 938.6666666666666, "series": [{"data": [[1.71865362E12, 938.6666666666666], [1.71865368E12, 57.45], [1.71865356E12, 670.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865368E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 58.5, "minX": 1.71865356E12, "maxY": 939.2833333333333, "series": [{"data": [[1.71865362E12, 939.2833333333333], [1.71865368E12, 58.5], [1.71865356E12, 668.8833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865368E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 58.5, "minX": 1.71865356E12, "maxY": 939.2833333333333, "series": [{"data": [[1.71865362E12, 939.2833333333333], [1.71865368E12, 58.5], [1.71865356E12, 668.8833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865368E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 58.5, "minX": 1.71865356E12, "maxY": 939.2833333333333, "series": [{"data": [[1.71865362E12, 939.2833333333333], [1.71865368E12, 58.5], [1.71865356E12, 668.8833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865368E12, "title": "Total Transactions Per Second"}},
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

