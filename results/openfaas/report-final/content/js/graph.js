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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 242.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 10.0], [5.4, 10.0], [5.5, 10.0], [5.6, 10.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 11.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 12.0], [7.6, 13.0], [7.7, 13.0], [7.8, 13.0], [7.9, 13.0], [8.0, 13.0], [8.1, 13.0], [8.2, 13.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 15.0], [9.1, 15.0], [9.2, 15.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 15.0], [9.7, 15.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 17.0], [10.8, 17.0], [10.9, 17.0], [11.0, 17.0], [11.1, 17.0], [11.2, 17.0], [11.3, 17.0], [11.4, 17.0], [11.5, 18.0], [11.6, 18.0], [11.7, 18.0], [11.8, 18.0], [11.9, 18.0], [12.0, 18.0], [12.1, 18.0], [12.2, 18.0], [12.3, 18.0], [12.4, 19.0], [12.5, 19.0], [12.6, 19.0], [12.7, 19.0], [12.8, 19.0], [12.9, 19.0], [13.0, 19.0], [13.1, 19.0], [13.2, 19.0], [13.3, 20.0], [13.4, 20.0], [13.5, 20.0], [13.6, 20.0], [13.7, 20.0], [13.8, 20.0], [13.9, 20.0], [14.0, 20.0], [14.1, 20.0], [14.2, 21.0], [14.3, 21.0], [14.4, 21.0], [14.5, 21.0], [14.6, 21.0], [14.7, 21.0], [14.8, 21.0], [14.9, 21.0], [15.0, 22.0], [15.1, 22.0], [15.2, 22.0], [15.3, 22.0], [15.4, 22.0], [15.5, 22.0], [15.6, 22.0], [15.7, 22.0], [15.8, 22.0], [15.9, 23.0], [16.0, 23.0], [16.1, 23.0], [16.2, 23.0], [16.3, 23.0], [16.4, 23.0], [16.5, 23.0], [16.6, 23.0], [16.7, 23.0], [16.8, 24.0], [16.9, 24.0], [17.0, 24.0], [17.1, 24.0], [17.2, 24.0], [17.3, 24.0], [17.4, 24.0], [17.5, 24.0], [17.6, 25.0], [17.7, 25.0], [17.8, 25.0], [17.9, 25.0], [18.0, 25.0], [18.1, 25.0], [18.2, 25.0], [18.3, 25.0], [18.4, 26.0], [18.5, 26.0], [18.6, 26.0], [18.7, 26.0], [18.8, 26.0], [18.9, 26.0], [19.0, 26.0], [19.1, 26.0], [19.2, 27.0], [19.3, 27.0], [19.4, 27.0], [19.5, 27.0], [19.6, 27.0], [19.7, 27.0], [19.8, 27.0], [19.9, 27.0], [20.0, 28.0], [20.1, 28.0], [20.2, 28.0], [20.3, 28.0], [20.4, 28.0], [20.5, 28.0], [20.6, 28.0], [20.7, 28.0], [20.8, 29.0], [20.9, 29.0], [21.0, 29.0], [21.1, 29.0], [21.2, 29.0], [21.3, 29.0], [21.4, 29.0], [21.5, 29.0], [21.6, 30.0], [21.7, 30.0], [21.8, 30.0], [21.9, 30.0], [22.0, 30.0], [22.1, 30.0], [22.2, 30.0], [22.3, 30.0], [22.4, 30.0], [22.5, 31.0], [22.6, 31.0], [22.7, 31.0], [22.8, 31.0], [22.9, 31.0], [23.0, 31.0], [23.1, 31.0], [23.2, 31.0], [23.3, 32.0], [23.4, 32.0], [23.5, 32.0], [23.6, 32.0], [23.7, 32.0], [23.8, 32.0], [23.9, 32.0], [24.0, 33.0], [24.1, 33.0], [24.2, 33.0], [24.3, 33.0], [24.4, 33.0], [24.5, 33.0], [24.6, 33.0], [24.7, 33.0], [24.8, 34.0], [24.9, 34.0], [25.0, 34.0], [25.1, 34.0], [25.2, 34.0], [25.3, 34.0], [25.4, 34.0], [25.5, 34.0], [25.6, 35.0], [25.7, 35.0], [25.8, 35.0], [25.9, 35.0], [26.0, 35.0], [26.1, 35.0], [26.2, 35.0], [26.3, 35.0], [26.4, 36.0], [26.5, 36.0], [26.6, 36.0], [26.7, 36.0], [26.8, 36.0], [26.9, 36.0], [27.0, 36.0], [27.1, 36.0], [27.2, 36.0], [27.3, 37.0], [27.4, 37.0], [27.5, 37.0], [27.6, 37.0], [27.7, 37.0], [27.8, 37.0], [27.9, 37.0], [28.0, 37.0], [28.1, 38.0], [28.2, 38.0], [28.3, 38.0], [28.4, 38.0], [28.5, 38.0], [28.6, 38.0], [28.7, 38.0], [28.8, 38.0], [28.9, 38.0], [29.0, 39.0], [29.1, 39.0], [29.2, 39.0], [29.3, 39.0], [29.4, 39.0], [29.5, 39.0], [29.6, 39.0], [29.7, 39.0], [29.8, 39.0], [29.9, 39.0], [30.0, 40.0], [30.1, 40.0], [30.2, 40.0], [30.3, 40.0], [30.4, 40.0], [30.5, 40.0], [30.6, 40.0], [30.7, 40.0], [30.8, 40.0], [30.9, 40.0], [31.0, 41.0], [31.1, 41.0], [31.2, 41.0], [31.3, 41.0], [31.4, 41.0], [31.5, 41.0], [31.6, 41.0], [31.7, 41.0], [31.8, 41.0], [31.9, 42.0], [32.0, 42.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 42.0], [32.5, 42.0], [32.6, 42.0], [32.7, 42.0], [32.8, 43.0], [32.9, 43.0], [33.0, 43.0], [33.1, 43.0], [33.2, 43.0], [33.3, 43.0], [33.4, 43.0], [33.5, 43.0], [33.6, 43.0], [33.7, 44.0], [33.8, 44.0], [33.9, 44.0], [34.0, 44.0], [34.1, 44.0], [34.2, 44.0], [34.3, 44.0], [34.4, 44.0], [34.5, 44.0], [34.6, 45.0], [34.7, 45.0], [34.8, 45.0], [34.9, 45.0], [35.0, 45.0], [35.1, 45.0], [35.2, 45.0], [35.3, 45.0], [35.4, 46.0], [35.5, 46.0], [35.6, 46.0], [35.7, 46.0], [35.8, 46.0], [35.9, 46.0], [36.0, 46.0], [36.1, 46.0], [36.2, 46.0], [36.3, 47.0], [36.4, 47.0], [36.5, 47.0], [36.6, 47.0], [36.7, 47.0], [36.8, 47.0], [36.9, 47.0], [37.0, 48.0], [37.1, 48.0], [37.2, 48.0], [37.3, 48.0], [37.4, 48.0], [37.5, 48.0], [37.6, 48.0], [37.7, 48.0], [37.8, 49.0], [37.9, 49.0], [38.0, 49.0], [38.1, 49.0], [38.2, 49.0], [38.3, 49.0], [38.4, 49.0], [38.5, 49.0], [38.6, 50.0], [38.7, 50.0], [38.8, 50.0], [38.9, 50.0], [39.0, 50.0], [39.1, 50.0], [39.2, 50.0], [39.3, 51.0], [39.4, 51.0], [39.5, 51.0], [39.6, 51.0], [39.7, 51.0], [39.8, 51.0], [39.9, 51.0], [40.0, 52.0], [40.1, 52.0], [40.2, 52.0], [40.3, 52.0], [40.4, 52.0], [40.5, 52.0], [40.6, 52.0], [40.7, 53.0], [40.8, 53.0], [40.9, 53.0], [41.0, 53.0], [41.1, 53.0], [41.2, 53.0], [41.3, 53.0], [41.4, 54.0], [41.5, 54.0], [41.6, 54.0], [41.7, 54.0], [41.8, 54.0], [41.9, 54.0], [42.0, 54.0], [42.1, 55.0], [42.2, 55.0], [42.3, 55.0], [42.4, 55.0], [42.5, 55.0], [42.6, 55.0], [42.7, 55.0], [42.8, 56.0], [42.9, 56.0], [43.0, 56.0], [43.1, 56.0], [43.2, 56.0], [43.3, 56.0], [43.4, 57.0], [43.5, 57.0], [43.6, 57.0], [43.7, 57.0], [43.8, 57.0], [43.9, 57.0], [44.0, 57.0], [44.1, 58.0], [44.2, 58.0], [44.3, 58.0], [44.4, 58.0], [44.5, 58.0], [44.6, 58.0], [44.7, 59.0], [44.8, 59.0], [44.9, 59.0], [45.0, 59.0], [45.1, 59.0], [45.2, 59.0], [45.3, 59.0], [45.4, 60.0], [45.5, 60.0], [45.6, 60.0], [45.7, 60.0], [45.8, 60.0], [45.9, 60.0], [46.0, 60.0], [46.1, 61.0], [46.2, 61.0], [46.3, 61.0], [46.4, 61.0], [46.5, 61.0], [46.6, 61.0], [46.7, 61.0], [46.8, 62.0], [46.9, 62.0], [47.0, 62.0], [47.1, 62.0], [47.2, 62.0], [47.3, 62.0], [47.4, 62.0], [47.5, 63.0], [47.6, 63.0], [47.7, 63.0], [47.8, 63.0], [47.9, 63.0], [48.0, 63.0], [48.1, 63.0], [48.2, 63.0], [48.3, 64.0], [48.4, 64.0], [48.5, 64.0], [48.6, 64.0], [48.7, 64.0], [48.8, 64.0], [48.9, 64.0], [49.0, 64.0], [49.1, 65.0], [49.2, 65.0], [49.3, 65.0], [49.4, 65.0], [49.5, 65.0], [49.6, 65.0], [49.7, 65.0], [49.8, 65.0], [49.9, 66.0], [50.0, 66.0], [50.1, 66.0], [50.2, 66.0], [50.3, 66.0], [50.4, 66.0], [50.5, 66.0], [50.6, 66.0], [50.7, 66.0], [50.8, 67.0], [50.9, 67.0], [51.0, 67.0], [51.1, 67.0], [51.2, 67.0], [51.3, 67.0], [51.4, 67.0], [51.5, 68.0], [51.6, 68.0], [51.7, 68.0], [51.8, 68.0], [51.9, 68.0], [52.0, 68.0], [52.1, 69.0], [52.2, 69.0], [52.3, 69.0], [52.4, 69.0], [52.5, 69.0], [52.6, 69.0], [52.7, 70.0], [52.8, 70.0], [52.9, 70.0], [53.0, 70.0], [53.1, 70.0], [53.2, 70.0], [53.3, 70.0], [53.4, 70.0], [53.5, 71.0], [53.6, 71.0], [53.7, 71.0], [53.8, 71.0], [53.9, 71.0], [54.0, 71.0], [54.1, 71.0], [54.2, 71.0], [54.3, 71.0], [54.4, 72.0], [54.5, 72.0], [54.6, 72.0], [54.7, 72.0], [54.8, 72.0], [54.9, 72.0], [55.0, 72.0], [55.1, 72.0], [55.2, 72.0], [55.3, 73.0], [55.4, 73.0], [55.5, 73.0], [55.6, 73.0], [55.7, 73.0], [55.8, 73.0], [55.9, 73.0], [56.0, 73.0], [56.1, 74.0], [56.2, 74.0], [56.3, 74.0], [56.4, 74.0], [56.5, 74.0], [56.6, 74.0], [56.7, 74.0], [56.8, 74.0], [56.9, 74.0], [57.0, 75.0], [57.1, 75.0], [57.2, 75.0], [57.3, 75.0], [57.4, 75.0], [57.5, 75.0], [57.6, 75.0], [57.7, 75.0], [57.8, 75.0], [57.9, 76.0], [58.0, 76.0], [58.1, 76.0], [58.2, 76.0], [58.3, 76.0], [58.4, 76.0], [58.5, 76.0], [58.6, 77.0], [58.7, 77.0], [58.8, 77.0], [58.9, 77.0], [59.0, 77.0], [59.1, 77.0], [59.2, 77.0], [59.3, 78.0], [59.4, 78.0], [59.5, 78.0], [59.6, 78.0], [59.7, 78.0], [59.8, 78.0], [59.9, 79.0], [60.0, 79.0], [60.1, 79.0], [60.2, 79.0], [60.3, 79.0], [60.4, 79.0], [60.5, 79.0], [60.6, 80.0], [60.7, 80.0], [60.8, 80.0], [60.9, 80.0], [61.0, 80.0], [61.1, 80.0], [61.2, 80.0], [61.3, 80.0], [61.4, 81.0], [61.5, 81.0], [61.6, 81.0], [61.7, 81.0], [61.8, 81.0], [61.9, 81.0], [62.0, 81.0], [62.1, 82.0], [62.2, 82.0], [62.3, 82.0], [62.4, 82.0], [62.5, 82.0], [62.6, 82.0], [62.7, 82.0], [62.8, 82.0], [62.9, 83.0], [63.0, 83.0], [63.1, 83.0], [63.2, 83.0], [63.3, 83.0], [63.4, 83.0], [63.5, 83.0], [63.6, 84.0], [63.7, 84.0], [63.8, 84.0], [63.9, 84.0], [64.0, 84.0], [64.1, 84.0], [64.2, 84.0], [64.3, 84.0], [64.4, 85.0], [64.5, 85.0], [64.6, 85.0], [64.7, 85.0], [64.8, 85.0], [64.9, 85.0], [65.0, 85.0], [65.1, 86.0], [65.2, 86.0], [65.3, 86.0], [65.4, 86.0], [65.5, 86.0], [65.6, 86.0], [65.7, 86.0], [65.8, 87.0], [65.9, 87.0], [66.0, 87.0], [66.1, 87.0], [66.2, 87.0], [66.3, 87.0], [66.4, 87.0], [66.5, 87.0], [66.6, 88.0], [66.7, 88.0], [66.8, 88.0], [66.9, 88.0], [67.0, 88.0], [67.1, 88.0], [67.2, 88.0], [67.3, 89.0], [67.4, 89.0], [67.5, 89.0], [67.6, 89.0], [67.7, 89.0], [67.8, 89.0], [67.9, 89.0], [68.0, 89.0], [68.1, 89.0], [68.2, 89.0], [68.3, 89.0], [68.4, 90.0], [68.5, 90.0], [68.6, 90.0], [68.7, 90.0], [68.8, 90.0], [68.9, 90.0], [69.0, 90.0], [69.1, 90.0], [69.2, 90.0], [69.3, 90.0], [69.4, 90.0], [69.5, 90.0], [69.6, 90.0], [69.7, 90.0], [69.8, 91.0], [69.9, 91.0], [70.0, 91.0], [70.1, 91.0], [70.2, 91.0], [70.3, 91.0], [70.4, 91.0], [70.5, 91.0], [70.6, 91.0], [70.7, 91.0], [70.8, 91.0], [70.9, 91.0], [71.0, 91.0], [71.1, 91.0], [71.2, 91.0], [71.3, 91.0], [71.4, 91.0], [71.5, 91.0], [71.6, 91.0], [71.7, 91.0], [71.8, 91.0], [71.9, 91.0], [72.0, 92.0], [72.1, 92.0], [72.2, 92.0], [72.3, 92.0], [72.4, 92.0], [72.5, 92.0], [72.6, 92.0], [72.7, 92.0], [72.8, 92.0], [72.9, 92.0], [73.0, 92.0], [73.1, 92.0], [73.2, 92.0], [73.3, 92.0], [73.4, 92.0], [73.5, 92.0], [73.6, 92.0], [73.7, 92.0], [73.8, 92.0], [73.9, 92.0], [74.0, 92.0], [74.1, 92.0], [74.2, 92.0], [74.3, 92.0], [74.4, 92.0], [74.5, 92.0], [74.6, 92.0], [74.7, 92.0], [74.8, 92.0], [74.9, 92.0], [75.0, 92.0], [75.1, 92.0], [75.2, 92.0], [75.3, 92.0], [75.4, 92.0], [75.5, 92.0], [75.6, 92.0], [75.7, 92.0], [75.8, 93.0], [75.9, 93.0], [76.0, 93.0], [76.1, 93.0], [76.2, 93.0], [76.3, 93.0], [76.4, 93.0], [76.5, 93.0], [76.6, 93.0], [76.7, 93.0], [76.8, 93.0], [76.9, 93.0], [77.0, 93.0], [77.1, 93.0], [77.2, 93.0], [77.3, 93.0], [77.4, 93.0], [77.5, 93.0], [77.6, 93.0], [77.7, 93.0], [77.8, 93.0], [77.9, 93.0], [78.0, 93.0], [78.1, 93.0], [78.2, 93.0], [78.3, 93.0], [78.4, 93.0], [78.5, 93.0], [78.6, 93.0], [78.7, 93.0], [78.8, 93.0], [78.9, 93.0], [79.0, 93.0], [79.1, 93.0], [79.2, 93.0], [79.3, 93.0], [79.4, 93.0], [79.5, 93.0], [79.6, 93.0], [79.7, 93.0], [79.8, 93.0], [79.9, 93.0], [80.0, 93.0], [80.1, 93.0], [80.2, 93.0], [80.3, 94.0], [80.4, 94.0], [80.5, 94.0], [80.6, 94.0], [80.7, 94.0], [80.8, 94.0], [80.9, 94.0], [81.0, 94.0], [81.1, 94.0], [81.2, 94.0], [81.3, 94.0], [81.4, 94.0], [81.5, 94.0], [81.6, 94.0], [81.7, 94.0], [81.8, 94.0], [81.9, 94.0], [82.0, 94.0], [82.1, 94.0], [82.2, 94.0], [82.3, 94.0], [82.4, 94.0], [82.5, 94.0], [82.6, 94.0], [82.7, 94.0], [82.8, 94.0], [82.9, 94.0], [83.0, 94.0], [83.1, 94.0], [83.2, 94.0], [83.3, 94.0], [83.4, 94.0], [83.5, 94.0], [83.6, 94.0], [83.7, 94.0], [83.8, 94.0], [83.9, 94.0], [84.0, 94.0], [84.1, 94.0], [84.2, 94.0], [84.3, 94.0], [84.4, 94.0], [84.5, 95.0], [84.6, 95.0], [84.7, 95.0], [84.8, 95.0], [84.9, 95.0], [85.0, 95.0], [85.1, 95.0], [85.2, 95.0], [85.3, 95.0], [85.4, 95.0], [85.5, 95.0], [85.6, 95.0], [85.7, 95.0], [85.8, 95.0], [85.9, 95.0], [86.0, 95.0], [86.1, 95.0], [86.2, 95.0], [86.3, 95.0], [86.4, 95.0], [86.5, 95.0], [86.6, 95.0], [86.7, 95.0], [86.8, 95.0], [86.9, 95.0], [87.0, 95.0], [87.1, 95.0], [87.2, 95.0], [87.3, 95.0], [87.4, 95.0], [87.5, 95.0], [87.6, 95.0], [87.7, 95.0], [87.8, 95.0], [87.9, 96.0], [88.0, 96.0], [88.1, 96.0], [88.2, 96.0], [88.3, 96.0], [88.4, 96.0], [88.5, 96.0], [88.6, 96.0], [88.7, 96.0], [88.8, 96.0], [88.9, 96.0], [89.0, 96.0], [89.1, 96.0], [89.2, 96.0], [89.3, 96.0], [89.4, 96.0], [89.5, 96.0], [89.6, 96.0], [89.7, 96.0], [89.8, 96.0], [89.9, 96.0], [90.0, 96.0], [90.1, 96.0], [90.2, 96.0], [90.3, 96.0], [90.4, 97.0], [90.5, 97.0], [90.6, 97.0], [90.7, 97.0], [90.8, 97.0], [90.9, 97.0], [91.0, 97.0], [91.1, 97.0], [91.2, 97.0], [91.3, 97.0], [91.4, 97.0], [91.5, 97.0], [91.6, 97.0], [91.7, 97.0], [91.8, 97.0], [91.9, 97.0], [92.0, 97.0], [92.1, 97.0], [92.2, 98.0], [92.3, 98.0], [92.4, 98.0], [92.5, 98.0], [92.6, 98.0], [92.7, 98.0], [92.8, 98.0], [92.9, 98.0], [93.0, 98.0], [93.1, 98.0], [93.2, 98.0], [93.3, 98.0], [93.4, 99.0], [93.5, 99.0], [93.6, 99.0], [93.7, 99.0], [93.8, 99.0], [93.9, 99.0], [94.0, 99.0], [94.1, 99.0], [94.2, 99.0], [94.3, 99.0], [94.4, 100.0], [94.5, 100.0], [94.6, 100.0], [94.7, 100.0], [94.8, 100.0], [94.9, 100.0], [95.0, 100.0], [95.1, 101.0], [95.2, 101.0], [95.3, 101.0], [95.4, 101.0], [95.5, 101.0], [95.6, 101.0], [95.7, 101.0], [95.8, 102.0], [95.9, 102.0], [96.0, 102.0], [96.1, 102.0], [96.2, 102.0], [96.3, 102.0], [96.4, 103.0], [96.5, 103.0], [96.6, 103.0], [96.7, 103.0], [96.8, 103.0], [96.9, 104.0], [97.0, 104.0], [97.1, 104.0], [97.2, 104.0], [97.3, 105.0], [97.4, 105.0], [97.5, 106.0], [97.6, 106.0], [97.7, 106.0], [97.8, 107.0], [97.9, 107.0], [98.0, 108.0], [98.1, 108.0], [98.2, 109.0], [98.3, 109.0], [98.4, 110.0], [98.5, 110.0], [98.6, 111.0], [98.7, 111.0], [98.8, 112.0], [98.9, 112.0], [99.0, 113.0], [99.1, 113.0], [99.2, 114.0], [99.3, 115.0], [99.4, 115.0], [99.5, 116.0], [99.6, 118.0], [99.7, 120.0], [99.8, 128.0], [99.9, 163.0], [100.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 94329.0, "series": [{"data": [[0.0, 94329.0], [100.0, 5631.0], [200.0, 40.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 81.81081521960772, "minX": 1.7186469E12, "maxY": 93.9846447356209, "series": [{"data": [[1.71864696E12, 81.81081521960772], [1.7186469E12, 93.9846447356209]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864696E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.0, "maxY": 88.44827586206895, "series": [{"data": [[2.0, 4.6875], [3.0, 4.141176470588237], [4.0, 5.057471264367815], [5.0, 5.670454545454547], [6.0, 6.112149532710279], [7.0, 6.826086956521736], [8.0, 8.201754385964906], [9.0, 9.07142857142857], [10.0, 9.99099099099099], [11.0, 11.192307692307692], [12.0, 9.727272727272727], [13.0, 14.141592920353984], [14.0, 12.966386554621845], [15.0, 14.855855855855864], [16.0, 15.543103448275858], [17.0, 16.442307692307697], [18.0, 18.704081632653054], [19.0, 17.93457943925233], [20.0, 19.33333333333333], [21.0, 20.139344262295083], [22.0, 18.509803921568636], [23.0, 21.56190476190476], [24.0, 22.294573643410864], [25.0, 14.843137254901956], [26.0, 88.44827586206895], [27.0, 24.657657657657655], [28.0, 31.275510204081634], [29.0, 25.305084745762706], [30.0, 23.5195530726257], [31.0, 22.38541666666666], [32.0, 32.46551724137931], [33.0, 28.805970149253735], [34.0, 28.912162162162144], [35.0, 28.418079096045194], [36.0, 26.307692307692303], [37.0, 31.798657718120808], [38.0, 25.775067750677525], [39.0, 37.764705882352935], [40.0, 39.57999999999999], [41.0, 40.27777777777778], [42.0, 40.009433962264154], [43.0, 30.168874172185436], [44.0, 38.49504950495051], [45.0, 44.871794871794876], [46.0, 41.00775193798447], [47.0, 38.01775147928991], [48.0, 40.92028985507246], [49.0, 43.03053435114505], [50.0, 34.25093632958802], [51.0, 50.46078431372548], [52.0, 35.90553745928338], [53.0, 44.22463768115942], [54.0, 39.421052631578945], [55.0, 44.644736842105246], [56.0, 59.979381443298955], [57.0, 68.77165354330708], [58.0, 46.23030303030302], [59.0, 51.076923076923094], [60.0, 52.941176470588225], [61.0, 48.16751269035534], [62.0, 47.16279069767444], [63.0, 48.105263157894754], [64.0, 39.8768472906404], [65.0, 44.67905405405406], [66.0, 43.45348837209301], [67.0, 46.13702623906707], [68.0, 52.27310924369751], [69.0, 52.28703703703705], [70.0, 55.61999999999999], [71.0, 50.92026578073091], [72.0, 53.48042704626331], [73.0, 54.44230769230771], [74.0, 54.908163265306165], [75.0, 62.668122270742316], [76.0, 52.44193548387095], [77.0, 49.652513966480434], [78.0, 49.58890701468188], [79.0, 69.95934959349593], [80.0, 57.533834586466135], [81.0, 58.03206997084546], [82.0, 52.592936802973945], [83.0, 50.74114173228347], [84.0, 67.21844660194172], [85.0, 63.81415929203539], [86.0, 57.93809523809523], [87.0, 51.12554381603479], [88.0, 52.13385826771648], [89.0, 71.43790849673205], [90.0, 58.844827586206804], [91.0, 53.25889477668425], [92.0, 54.340510366826166], [93.0, 54.70084619213539], [94.0, 61.665499124343235], [95.0, 54.97167656464139], [96.0, 55.22349102773247], [97.0, 53.18993794326235], [98.0, 54.20253863134649], [99.0, 63.860824742268036], [100.0, 69.60410663964677], [1.0, 3.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[90.99948999999893, 61.66883999999985]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52311.46666666667, "minX": 1.7186469E12, "maxY": 588584.1666666666, "series": [{"data": [[1.71864696E12, 191214.0], [1.7186469E12, 588584.1666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71864696E12, 52311.46666666667], [1.7186469E12, 161021.86666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864696E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 45.87867542106781, "minX": 1.7186469E12, "maxY": 66.79861948356492, "series": [{"data": [[1.71864696E12, 45.87867542106781], [1.7186469E12, 66.79861948356492]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864696E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 45.87741119856455, "minX": 1.7186469E12, "maxY": 66.79660567840094, "series": [{"data": [[1.71864696E12, 45.87741119856455], [1.7186469E12, 66.79660567840094]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864696E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.141615548695531E-4, "minX": 1.7186469E12, "maxY": 0.0025692263773908056, "series": [{"data": [[1.71864696E12, 0.0025692263773908056], [1.7186469E12, 9.141615548695531E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864696E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.7186469E12, "maxY": 242.0, "series": [{"data": [[1.71864696E12, 133.0], [1.7186469E12, 242.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71864696E12, 85.0], [1.7186469E12, 90.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71864696E12, 97.0], [1.7186469E12, 104.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71864696E12, 91.0], [1.7186469E12, 97.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71864696E12, 3.0], [1.7186469E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71864696E12, 38.0], [1.7186469E12, 54.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864696E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 231.0, "maxY": 102.0, "series": [{"data": [[854.0, 32.0], [893.0, 61.0], [930.0, 10.0], [928.0, 20.0], [979.0, 70.0], [967.0, 102.0], [1014.0, 39.0], [1013.0, 49.0], [1002.0, 86.0], [1007.0, 100.0], [1065.0, 94.0], [1030.0, 75.0], [1047.0, 94.0], [1053.0, 94.0], [1070.0, 93.0], [1067.0, 94.0], [1079.0, 92.0], [1066.0, 94.0], [1044.0, 95.0], [1073.0, 93.0], [1037.0, 96.0], [1077.0, 93.0], [1075.0, 93.0], [1062.0, 93.0], [1058.0, 95.0], [1084.0, 93.0], [1306.0, 94.0], [1300.0, 14.0], [1691.0, 87.0], [1712.0, 68.0], [1715.0, 42.0], [1790.0, 92.0], [1746.0, 32.0], [1783.0, 35.0], [1788.0, 68.0], [1775.0, 58.0], [1773.0, 69.0], [1765.0, 64.0], [1752.0, 68.0], [1760.0, 37.0], [1847.0, 56.0], [1830.0, 57.0], [1833.0, 60.0], [1851.0, 53.0], [1821.0, 58.0], [1793.0, 51.0], [1814.0, 66.0], [1843.0, 57.0], [1807.0, 57.0], [1853.0, 70.0], [1802.0, 81.0], [1824.0, 78.0], [1854.0, 28.0], [1858.0, 54.0], [1866.0, 39.0], [1872.0, 74.0], [1859.0, 53.0], [1867.0, 54.0], [1870.0, 54.0], [1891.0, 52.0], [1861.0, 51.0], [1863.0, 52.0], [231.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1891.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 231.0, "maxY": 102.0, "series": [{"data": [[854.0, 32.0], [893.0, 61.0], [930.0, 10.0], [928.0, 20.0], [979.0, 70.0], [967.0, 102.0], [1014.0, 39.0], [1013.0, 49.0], [1002.0, 86.0], [1007.0, 100.0], [1065.0, 94.0], [1030.0, 75.0], [1047.0, 94.0], [1053.0, 94.0], [1070.0, 93.0], [1067.0, 94.0], [1079.0, 92.0], [1066.0, 94.0], [1044.0, 95.0], [1073.0, 93.0], [1037.0, 96.0], [1077.0, 93.0], [1075.0, 93.0], [1062.0, 93.0], [1058.0, 95.0], [1084.0, 93.0], [1306.0, 94.0], [1300.0, 14.0], [1691.0, 87.0], [1712.0, 68.0], [1715.0, 42.0], [1790.0, 92.0], [1746.0, 32.0], [1783.0, 35.0], [1788.0, 68.0], [1775.0, 58.0], [1773.0, 69.0], [1765.0, 64.0], [1752.0, 68.0], [1760.0, 37.0], [1847.0, 56.0], [1830.0, 57.0], [1833.0, 60.0], [1851.0, 53.0], [1821.0, 58.0], [1793.0, 51.0], [1814.0, 66.0], [1843.0, 57.0], [1807.0, 57.0], [1853.0, 70.0], [1802.0, 81.0], [1824.0, 78.0], [1854.0, 28.0], [1858.0, 54.0], [1866.0, 39.0], [1872.0, 74.0], [1859.0, 53.0], [1867.0, 54.0], [1870.0, 54.0], [1891.0, 52.0], [1861.0, 51.0], [1863.0, 52.0], [231.0, 5.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1891.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 407.06666666666666, "minX": 1.7186469E12, "maxY": 1259.6, "series": [{"data": [[1.71864696E12, 407.06666666666666], [1.7186469E12, 1259.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864696E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 408.68333333333334, "minX": 1.7186469E12, "maxY": 1257.9833333333333, "series": [{"data": [[1.71864696E12, 408.68333333333334], [1.7186469E12, 1257.9833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71864696E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 408.68333333333334, "minX": 1.7186469E12, "maxY": 1257.9833333333333, "series": [{"data": [[1.71864696E12, 408.68333333333334], [1.7186469E12, 1257.9833333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864696E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 408.68333333333334, "minX": 1.7186469E12, "maxY": 1257.9833333333333, "series": [{"data": [[1.71864696E12, 408.68333333333334], [1.7186469E12, 1257.9833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71864696E12, "title": "Total Transactions Per Second"}},
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

