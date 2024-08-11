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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2646.0, "series": [{"data": [[0.0, 1.0], [0.1, 4.0], [0.2, 5.0], [0.3, 6.0], [0.4, 6.0], [0.5, 7.0], [0.6, 7.0], [0.7, 8.0], [0.8, 8.0], [0.9, 9.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 11.0], [1.4, 11.0], [1.5, 11.0], [1.6, 11.0], [1.7, 12.0], [1.8, 12.0], [1.9, 12.0], [2.0, 12.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 14.0], [2.5, 14.0], [2.6, 15.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 16.0], [3.1, 16.0], [3.2, 16.0], [3.3, 16.0], [3.4, 16.0], [3.5, 17.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 19.0], [4.8, 19.0], [4.9, 19.0], [5.0, 19.0], [5.1, 19.0], [5.2, 19.0], [5.3, 19.0], [5.4, 19.0], [5.5, 20.0], [5.6, 20.0], [5.7, 20.0], [5.8, 20.0], [5.9, 20.0], [6.0, 20.0], [6.1, 20.0], [6.2, 20.0], [6.3, 20.0], [6.4, 20.0], [6.5, 20.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 21.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 22.0], [8.9, 22.0], [9.0, 22.0], [9.1, 22.0], [9.2, 22.0], [9.3, 22.0], [9.4, 22.0], [9.5, 22.0], [9.6, 22.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 23.0], [10.4, 23.0], [10.5, 23.0], [10.6, 23.0], [10.7, 23.0], [10.8, 23.0], [10.9, 23.0], [11.0, 23.0], [11.1, 23.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 24.0], [12.1, 24.0], [12.2, 24.0], [12.3, 24.0], [12.4, 24.0], [12.5, 24.0], [12.6, 25.0], [12.7, 25.0], [12.8, 25.0], [12.9, 25.0], [13.0, 25.0], [13.1, 25.0], [13.2, 25.0], [13.3, 25.0], [13.4, 25.0], [13.5, 25.0], [13.6, 26.0], [13.7, 26.0], [13.8, 26.0], [13.9, 26.0], [14.0, 26.0], [14.1, 26.0], [14.2, 26.0], [14.3, 26.0], [14.4, 26.0], [14.5, 26.0], [14.6, 26.0], [14.7, 26.0], [14.8, 26.0], [14.9, 27.0], [15.0, 27.0], [15.1, 27.0], [15.2, 27.0], [15.3, 27.0], [15.4, 27.0], [15.5, 27.0], [15.6, 27.0], [15.7, 27.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 27.0], [16.4, 27.0], [16.5, 28.0], [16.6, 28.0], [16.7, 28.0], [16.8, 28.0], [16.9, 28.0], [17.0, 28.0], [17.1, 28.0], [17.2, 28.0], [17.3, 28.0], [17.4, 28.0], [17.5, 28.0], [17.6, 28.0], [17.7, 29.0], [17.8, 29.0], [17.9, 29.0], [18.0, 29.0], [18.1, 29.0], [18.2, 29.0], [18.3, 29.0], [18.4, 29.0], [18.5, 29.0], [18.6, 29.0], [18.7, 29.0], [18.8, 30.0], [18.9, 30.0], [19.0, 30.0], [19.1, 30.0], [19.2, 30.0], [19.3, 30.0], [19.4, 30.0], [19.5, 30.0], [19.6, 30.0], [19.7, 30.0], [19.8, 30.0], [19.9, 30.0], [20.0, 30.0], [20.1, 30.0], [20.2, 30.0], [20.3, 30.0], [20.4, 30.0], [20.5, 30.0], [20.6, 30.0], [20.7, 31.0], [20.8, 31.0], [20.9, 31.0], [21.0, 31.0], [21.1, 31.0], [21.2, 31.0], [21.3, 31.0], [21.4, 31.0], [21.5, 31.0], [21.6, 31.0], [21.7, 31.0], [21.8, 31.0], [21.9, 31.0], [22.0, 31.0], [22.1, 31.0], [22.2, 31.0], [22.3, 31.0], [22.4, 31.0], [22.5, 31.0], [22.6, 31.0], [22.7, 31.0], [22.8, 31.0], [22.9, 31.0], [23.0, 31.0], [23.1, 31.0], [23.2, 31.0], [23.3, 31.0], [23.4, 31.0], [23.5, 31.0], [23.6, 31.0], [23.7, 31.0], [23.8, 31.0], [23.9, 31.0], [24.0, 31.0], [24.1, 32.0], [24.2, 32.0], [24.3, 32.0], [24.4, 32.0], [24.5, 32.0], [24.6, 32.0], [24.7, 32.0], [24.8, 32.0], [24.9, 32.0], [25.0, 32.0], [25.1, 32.0], [25.2, 32.0], [25.3, 32.0], [25.4, 32.0], [25.5, 32.0], [25.6, 32.0], [25.7, 32.0], [25.8, 32.0], [25.9, 32.0], [26.0, 32.0], [26.1, 32.0], [26.2, 32.0], [26.3, 32.0], [26.4, 32.0], [26.5, 32.0], [26.6, 32.0], [26.7, 32.0], [26.8, 32.0], [26.9, 32.0], [27.0, 32.0], [27.1, 33.0], [27.2, 33.0], [27.3, 33.0], [27.4, 33.0], [27.5, 33.0], [27.6, 33.0], [27.7, 33.0], [27.8, 33.0], [27.9, 33.0], [28.0, 33.0], [28.1, 33.0], [28.2, 33.0], [28.3, 33.0], [28.4, 33.0], [28.5, 33.0], [28.6, 33.0], [28.7, 33.0], [28.8, 33.0], [28.9, 33.0], [29.0, 34.0], [29.1, 34.0], [29.2, 34.0], [29.3, 34.0], [29.4, 34.0], [29.5, 34.0], [29.6, 34.0], [29.7, 34.0], [29.8, 34.0], [29.9, 34.0], [30.0, 34.0], [30.1, 34.0], [30.2, 34.0], [30.3, 34.0], [30.4, 35.0], [30.5, 35.0], [30.6, 35.0], [30.7, 35.0], [30.8, 35.0], [30.9, 35.0], [31.0, 36.0], [31.1, 36.0], [31.2, 36.0], [31.3, 36.0], [31.4, 36.0], [31.5, 36.0], [31.6, 36.0], [31.7, 37.0], [31.8, 37.0], [31.9, 37.0], [32.0, 37.0], [32.1, 37.0], [32.2, 37.0], [32.3, 37.0], [32.4, 37.0], [32.5, 37.0], [32.6, 37.0], [32.7, 37.0], [32.8, 37.0], [32.9, 38.0], [33.0, 38.0], [33.1, 38.0], [33.2, 38.0], [33.3, 38.0], [33.4, 38.0], [33.5, 38.0], [33.6, 38.0], [33.7, 38.0], [33.8, 38.0], [33.9, 38.0], [34.0, 38.0], [34.1, 38.0], [34.2, 39.0], [34.3, 39.0], [34.4, 39.0], [34.5, 39.0], [34.6, 39.0], [34.7, 39.0], [34.8, 39.0], [34.9, 39.0], [35.0, 40.0], [35.1, 40.0], [35.2, 40.0], [35.3, 41.0], [35.4, 42.0], [35.5, 43.0], [35.6, 44.0], [35.7, 46.0], [35.8, 51.0], [35.9, 56.0], [36.0, 65.0], [36.1, 73.0], [36.2, 76.0], [36.3, 82.0], [36.4, 87.0], [36.5, 91.0], [36.6, 98.0], [36.7, 103.0], [36.8, 107.0], [36.9, 109.0], [37.0, 110.0], [37.1, 111.0], [37.2, 112.0], [37.3, 112.0], [37.4, 113.0], [37.5, 113.0], [37.6, 114.0], [37.7, 114.0], [37.8, 114.0], [37.9, 115.0], [38.0, 115.0], [38.1, 115.0], [38.2, 115.0], [38.3, 116.0], [38.4, 116.0], [38.5, 116.0], [38.6, 116.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 117.0], [39.2, 118.0], [39.3, 118.0], [39.4, 118.0], [39.5, 118.0], [39.6, 118.0], [39.7, 118.0], [39.8, 119.0], [39.9, 119.0], [40.0, 119.0], [40.1, 119.0], [40.2, 119.0], [40.3, 120.0], [40.4, 120.0], [40.5, 120.0], [40.6, 120.0], [40.7, 120.0], [40.8, 120.0], [40.9, 120.0], [41.0, 121.0], [41.1, 121.0], [41.2, 121.0], [41.3, 121.0], [41.4, 121.0], [41.5, 121.0], [41.6, 121.0], [41.7, 121.0], [41.8, 121.0], [41.9, 122.0], [42.0, 122.0], [42.1, 122.0], [42.2, 122.0], [42.3, 122.0], [42.4, 122.0], [42.5, 122.0], [42.6, 122.0], [42.7, 122.0], [42.8, 122.0], [42.9, 123.0], [43.0, 123.0], [43.1, 123.0], [43.2, 123.0], [43.3, 123.0], [43.4, 123.0], [43.5, 123.0], [43.6, 123.0], [43.7, 123.0], [43.8, 123.0], [43.9, 123.0], [44.0, 123.0], [44.1, 123.0], [44.2, 124.0], [44.3, 124.0], [44.4, 124.0], [44.5, 124.0], [44.6, 124.0], [44.7, 124.0], [44.8, 124.0], [44.9, 124.0], [45.0, 124.0], [45.1, 124.0], [45.2, 124.0], [45.3, 124.0], [45.4, 124.0], [45.5, 125.0], [45.6, 125.0], [45.7, 125.0], [45.8, 125.0], [45.9, 125.0], [46.0, 125.0], [46.1, 125.0], [46.2, 125.0], [46.3, 125.0], [46.4, 125.0], [46.5, 125.0], [46.6, 125.0], [46.7, 125.0], [46.8, 125.0], [46.9, 125.0], [47.0, 125.0], [47.1, 126.0], [47.2, 126.0], [47.3, 126.0], [47.4, 126.0], [47.5, 126.0], [47.6, 126.0], [47.7, 126.0], [47.8, 126.0], [47.9, 126.0], [48.0, 126.0], [48.1, 126.0], [48.2, 126.0], [48.3, 126.0], [48.4, 126.0], [48.5, 126.0], [48.6, 126.0], [48.7, 127.0], [48.8, 127.0], [48.9, 127.0], [49.0, 127.0], [49.1, 127.0], [49.2, 127.0], [49.3, 127.0], [49.4, 127.0], [49.5, 127.0], [49.6, 127.0], [49.7, 127.0], [49.8, 127.0], [49.9, 127.0], [50.0, 127.0], [50.1, 127.0], [50.2, 127.0], [50.3, 128.0], [50.4, 128.0], [50.5, 128.0], [50.6, 128.0], [50.7, 128.0], [50.8, 128.0], [50.9, 128.0], [51.0, 128.0], [51.1, 128.0], [51.2, 128.0], [51.3, 128.0], [51.4, 128.0], [51.5, 128.0], [51.6, 128.0], [51.7, 128.0], [51.8, 128.0], [51.9, 128.0], [52.0, 129.0], [52.1, 129.0], [52.2, 129.0], [52.3, 129.0], [52.4, 129.0], [52.5, 129.0], [52.6, 129.0], [52.7, 129.0], [52.8, 129.0], [52.9, 129.0], [53.0, 129.0], [53.1, 129.0], [53.2, 129.0], [53.3, 130.0], [53.4, 130.0], [53.5, 130.0], [53.6, 130.0], [53.7, 130.0], [53.8, 130.0], [53.9, 130.0], [54.0, 130.0], [54.1, 130.0], [54.2, 130.0], [54.3, 130.0], [54.4, 130.0], [54.5, 130.0], [54.6, 130.0], [54.7, 130.0], [54.8, 130.0], [54.9, 131.0], [55.0, 131.0], [55.1, 131.0], [55.2, 131.0], [55.3, 131.0], [55.4, 131.0], [55.5, 131.0], [55.6, 131.0], [55.7, 131.0], [55.8, 131.0], [55.9, 131.0], [56.0, 131.0], [56.1, 131.0], [56.2, 132.0], [56.3, 132.0], [56.4, 132.0], [56.5, 132.0], [56.6, 132.0], [56.7, 132.0], [56.8, 132.0], [56.9, 132.0], [57.0, 132.0], [57.1, 132.0], [57.2, 132.0], [57.3, 133.0], [57.4, 133.0], [57.5, 133.0], [57.6, 133.0], [57.7, 133.0], [57.8, 133.0], [57.9, 133.0], [58.0, 133.0], [58.1, 133.0], [58.2, 133.0], [58.3, 134.0], [58.4, 134.0], [58.5, 134.0], [58.6, 134.0], [58.7, 134.0], [58.8, 134.0], [58.9, 134.0], [59.0, 134.0], [59.1, 134.0], [59.2, 135.0], [59.3, 135.0], [59.4, 135.0], [59.5, 135.0], [59.6, 135.0], [59.7, 135.0], [59.8, 135.0], [59.9, 135.0], [60.0, 136.0], [60.1, 136.0], [60.2, 136.0], [60.3, 136.0], [60.4, 136.0], [60.5, 136.0], [60.6, 136.0], [60.7, 137.0], [60.8, 137.0], [60.9, 137.0], [61.0, 137.0], [61.1, 137.0], [61.2, 137.0], [61.3, 137.0], [61.4, 138.0], [61.5, 138.0], [61.6, 138.0], [61.7, 138.0], [61.8, 138.0], [61.9, 138.0], [62.0, 138.0], [62.1, 139.0], [62.2, 139.0], [62.3, 139.0], [62.4, 139.0], [62.5, 139.0], [62.6, 139.0], [62.7, 140.0], [62.8, 140.0], [62.9, 140.0], [63.0, 140.0], [63.1, 141.0], [63.2, 141.0], [63.3, 141.0], [63.4, 141.0], [63.5, 142.0], [63.6, 142.0], [63.7, 143.0], [63.8, 143.0], [63.9, 143.0], [64.0, 144.0], [64.1, 144.0], [64.2, 145.0], [64.3, 145.0], [64.4, 146.0], [64.5, 146.0], [64.6, 147.0], [64.7, 148.0], [64.8, 149.0], [64.9, 150.0], [65.0, 150.0], [65.1, 151.0], [65.2, 152.0], [65.3, 153.0], [65.4, 153.0], [65.5, 154.0], [65.6, 155.0], [65.7, 156.0], [65.8, 156.0], [65.9, 157.0], [66.0, 158.0], [66.1, 158.0], [66.2, 159.0], [66.3, 160.0], [66.4, 161.0], [66.5, 162.0], [66.6, 163.0], [66.7, 164.0], [66.8, 165.0], [66.9, 165.0], [67.0, 166.0], [67.1, 167.0], [67.2, 168.0], [67.3, 168.0], [67.4, 169.0], [67.5, 170.0], [67.6, 171.0], [67.7, 172.0], [67.8, 173.0], [67.9, 175.0], [68.0, 176.0], [68.1, 176.0], [68.2, 177.0], [68.3, 177.0], [68.4, 178.0], [68.5, 179.0], [68.6, 179.0], [68.7, 180.0], [68.8, 180.0], [68.9, 181.0], [69.0, 182.0], [69.1, 183.0], [69.2, 184.0], [69.3, 184.0], [69.4, 185.0], [69.5, 185.0], [69.6, 186.0], [69.7, 186.0], [69.8, 187.0], [69.9, 187.0], [70.0, 188.0], [70.1, 188.0], [70.2, 189.0], [70.3, 189.0], [70.4, 190.0], [70.5, 190.0], [70.6, 191.0], [70.7, 191.0], [70.8, 191.0], [70.9, 192.0], [71.0, 192.0], [71.1, 193.0], [71.2, 193.0], [71.3, 194.0], [71.4, 194.0], [71.5, 195.0], [71.6, 195.0], [71.7, 196.0], [71.8, 197.0], [71.9, 197.0], [72.0, 198.0], [72.1, 199.0], [72.2, 200.0], [72.3, 201.0], [72.4, 201.0], [72.5, 202.0], [72.6, 203.0], [72.7, 204.0], [72.8, 204.0], [72.9, 205.0], [73.0, 206.0], [73.1, 207.0], [73.2, 207.0], [73.3, 208.0], [73.4, 208.0], [73.5, 209.0], [73.6, 209.0], [73.7, 209.0], [73.8, 210.0], [73.9, 210.0], [74.0, 210.0], [74.1, 211.0], [74.2, 211.0], [74.3, 211.0], [74.4, 211.0], [74.5, 211.0], [74.6, 212.0], [74.7, 212.0], [74.8, 212.0], [74.9, 212.0], [75.0, 213.0], [75.1, 213.0], [75.2, 213.0], [75.3, 213.0], [75.4, 213.0], [75.5, 213.0], [75.6, 213.0], [75.7, 214.0], [75.8, 214.0], [75.9, 214.0], [76.0, 214.0], [76.1, 214.0], [76.2, 214.0], [76.3, 214.0], [76.4, 214.0], [76.5, 214.0], [76.6, 215.0], [76.7, 215.0], [76.8, 215.0], [76.9, 215.0], [77.0, 215.0], [77.1, 215.0], [77.2, 215.0], [77.3, 215.0], [77.4, 215.0], [77.5, 215.0], [77.6, 215.0], [77.7, 216.0], [77.8, 216.0], [77.9, 216.0], [78.0, 216.0], [78.1, 216.0], [78.2, 216.0], [78.3, 216.0], [78.4, 216.0], [78.5, 216.0], [78.6, 216.0], [78.7, 216.0], [78.8, 216.0], [78.9, 216.0], [79.0, 216.0], [79.1, 217.0], [79.2, 217.0], [79.3, 217.0], [79.4, 217.0], [79.5, 217.0], [79.6, 217.0], [79.7, 217.0], [79.8, 217.0], [79.9, 217.0], [80.0, 217.0], [80.1, 217.0], [80.2, 217.0], [80.3, 218.0], [80.4, 218.0], [80.5, 218.0], [80.6, 218.0], [80.7, 218.0], [80.8, 218.0], [80.9, 218.0], [81.0, 218.0], [81.1, 218.0], [81.2, 218.0], [81.3, 219.0], [81.4, 219.0], [81.5, 219.0], [81.6, 219.0], [81.7, 219.0], [81.8, 219.0], [81.9, 219.0], [82.0, 219.0], [82.1, 219.0], [82.2, 219.0], [82.3, 219.0], [82.4, 220.0], [82.5, 220.0], [82.6, 220.0], [82.7, 220.0], [82.8, 220.0], [82.9, 220.0], [83.0, 220.0], [83.1, 220.0], [83.2, 220.0], [83.3, 220.0], [83.4, 220.0], [83.5, 220.0], [83.6, 221.0], [83.7, 221.0], [83.8, 221.0], [83.9, 221.0], [84.0, 221.0], [84.1, 221.0], [84.2, 221.0], [84.3, 221.0], [84.4, 221.0], [84.5, 221.0], [84.6, 221.0], [84.7, 221.0], [84.8, 222.0], [84.9, 222.0], [85.0, 222.0], [85.1, 222.0], [85.2, 222.0], [85.3, 222.0], [85.4, 222.0], [85.5, 222.0], [85.6, 222.0], [85.7, 222.0], [85.8, 223.0], [85.9, 223.0], [86.0, 223.0], [86.1, 223.0], [86.2, 223.0], [86.3, 223.0], [86.4, 223.0], [86.5, 223.0], [86.6, 224.0], [86.7, 224.0], [86.8, 224.0], [86.9, 224.0], [87.0, 224.0], [87.1, 224.0], [87.2, 224.0], [87.3, 224.0], [87.4, 224.0], [87.5, 225.0], [87.6, 225.0], [87.7, 225.0], [87.8, 225.0], [87.9, 225.0], [88.0, 225.0], [88.1, 225.0], [88.2, 225.0], [88.3, 226.0], [88.4, 226.0], [88.5, 226.0], [88.6, 226.0], [88.7, 226.0], [88.8, 226.0], [88.9, 226.0], [89.0, 226.0], [89.1, 227.0], [89.2, 227.0], [89.3, 227.0], [89.4, 227.0], [89.5, 227.0], [89.6, 227.0], [89.7, 227.0], [89.8, 228.0], [89.9, 228.0], [90.0, 228.0], [90.1, 228.0], [90.2, 228.0], [90.3, 228.0], [90.4, 228.0], [90.5, 228.0], [90.6, 229.0], [90.7, 229.0], [90.8, 229.0], [90.9, 229.0], [91.0, 229.0], [91.1, 229.0], [91.2, 229.0], [91.3, 230.0], [91.4, 230.0], [91.5, 230.0], [91.6, 230.0], [91.7, 230.0], [91.8, 230.0], [91.9, 231.0], [92.0, 231.0], [92.1, 231.0], [92.2, 231.0], [92.3, 231.0], [92.4, 232.0], [92.5, 232.0], [92.6, 232.0], [92.7, 232.0], [92.8, 233.0], [92.9, 233.0], [93.0, 233.0], [93.1, 233.0], [93.2, 233.0], [93.3, 234.0], [93.4, 234.0], [93.5, 234.0], [93.6, 234.0], [93.7, 235.0], [93.8, 235.0], [93.9, 235.0], [94.0, 235.0], [94.1, 235.0], [94.2, 236.0], [94.3, 236.0], [94.4, 236.0], [94.5, 236.0], [94.6, 237.0], [94.7, 237.0], [94.8, 237.0], [94.9, 237.0], [95.0, 238.0], [95.1, 238.0], [95.2, 238.0], [95.3, 239.0], [95.4, 239.0], [95.5, 239.0], [95.6, 240.0], [95.7, 240.0], [95.8, 240.0], [95.9, 241.0], [96.0, 241.0], [96.1, 241.0], [96.2, 242.0], [96.3, 242.0], [96.4, 242.0], [96.5, 243.0], [96.6, 243.0], [96.7, 244.0], [96.8, 244.0], [96.9, 244.0], [97.0, 245.0], [97.1, 245.0], [97.2, 246.0], [97.3, 247.0], [97.4, 248.0], [97.5, 249.0], [97.6, 249.0], [97.7, 250.0], [97.8, 251.0], [97.9, 252.0], [98.0, 253.0], [98.1, 254.0], [98.2, 254.0], [98.3, 256.0], [98.4, 257.0], [98.5, 258.0], [98.6, 261.0], [98.7, 263.0], [98.8, 266.0], [98.9, 269.0], [99.0, 272.0], [99.1, 276.0], [99.2, 280.0], [99.3, 287.0], [99.4, 294.0], [99.5, 306.0], [99.6, 317.0], [99.7, 336.0], [99.8, 355.0], [99.9, 628.0], [100.0, 2646.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 36621.0, "series": [{"data": [[0.0, 36621.0], [600.0, 10.0], [700.0, 9.0], [800.0, 8.0], [900.0, 7.0], [1000.0, 7.0], [1100.0, 6.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 5.0], [1500.0, 8.0], [100.0, 35511.0], [1600.0, 8.0], [1700.0, 5.0], [1800.0, 2.0], [1900.0, 2.0], [2000.0, 2.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 4.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [200.0, 27316.0], [300.0, 389.0], [400.0, 46.0], [500.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 99832.0, "series": [{"data": [[0.0, 163.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 99832.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.38127532522907, "minX": 1.71821844E12, "maxY": 100.0, "series": [{"data": [[1.71821844E12, 75.38127532522907], [1.71821856E12, 82.83478540521588], [1.7182185E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821856E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.0, "maxY": 208.88336520076476, "series": [{"data": [[2.0, 1.8333333333333333], [3.0, 2.6666666666666665], [5.0, 77.8], [6.0, 29.642857142857142], [7.0, 48.33333333333333], [8.0, 31.14285714285714], [9.0, 32.77777777777778], [10.0, 32.4375], [11.0, 122.0], [12.0, 9.077777777777783], [13.0, 25.344827586206897], [14.0, 31.206896551724146], [15.0, 26.192307692307697], [16.0, 17.25555555555556], [17.0, 35.38888888888891], [18.0, 14.067796610169488], [19.0, 12.885350318471334], [20.0, 10.611538461538487], [21.0, 14.933333333333335], [22.0, 19.230769230769244], [23.0, 17.31818181818182], [24.0, 14.5625], [25.0, 14.262672811059902], [26.0, 12.476190476190482], [27.0, 67.7142857142857], [28.0, 20.83687943262412], [29.0, 22.126582278481024], [30.0, 39.5374149659864], [31.0, 18.49509803921568], [32.0, 20.827586206896566], [33.0, 21.345029239766077], [34.0, 18.400662251655646], [35.0, 21.161137440758285], [36.0, 16.21842105263157], [37.0, 24.301282051282048], [38.0, 16.157205240174687], [39.0, 24.89361702127661], [40.0, 20.702898550724633], [41.0, 21.905923344947734], [42.0, 23.825842696629206], [43.0, 21.04773269689741], [44.0, 21.89999999999999], [45.0, 20.513924050632895], [46.0, 22.177419354838726], [47.0, 26.193548387096765], [48.0, 24.681747269890803], [49.0, 28.64761904761905], [50.0, 85.65559440559443], [51.0, 29.78636363636363], [52.0, 90.70160116448332], [53.0, 60.22514619883041], [54.0, 77.35612535612535], [55.0, 80.42997542997546], [56.0, 63.63170731707313], [57.0, 24.236893203883497], [58.0, 27.517948717948727], [59.0, 23.522891566265027], [60.0, 23.116197183098596], [61.0, 22.71789473684211], [62.0, 22.368742368742378], [63.0, 23.79953379953381], [64.0, 25.05613305613306], [65.0, 24.55653710247351], [66.0, 25.39784946236559], [67.0, 24.523415977961434], [68.0, 24.91451292246521], [69.0, 27.24553571428572], [70.0, 24.367399741267793], [71.0, 24.9559748427673], [72.0, 102.37265917602997], [73.0, 35.19742489270385], [74.0, 79.2857142857143], [75.0, 67.78516624040915], [76.0, 86.01298701298708], [77.0, 76.42933333333333], [78.0, 106.26701570680626], [79.0, 119.4450127877238], [80.0, 125.36881188118808], [81.0, 69.48293963254595], [82.0, 134.91140278917146], [83.0, 130.3260309278352], [84.0, 91.45278969957084], [85.0, 122.12000000000002], [86.0, 144.30334728033475], [87.0, 117.80443548387099], [88.0, 139.25513905683175], [89.0, 75.94303797468352], [90.0, 187.4422222222222], [91.0, 156.4961240310077], [92.0, 142.78703703703698], [93.0, 182.66826923076923], [94.0, 169.16500000000008], [95.0, 167.06250000000009], [96.0, 183.57070707070716], [97.0, 173.87931034482773], [98.0, 201.45922746781116], [99.0, 208.88336520076476], [100.0, 149.42857983898318], [1.0, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[88.35695000000035, 124.07557999999896]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 60566.25, "minX": 1.71821844E12, "maxY": 235731.86666666667, "series": [{"data": [[1.71821844E12, 135592.3], [1.71821856E12, 188743.6], [1.7182185E12, 235731.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71821844E12, 60566.25], [1.71821856E12, 88360.33333333333], [1.7182185E12, 109406.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821856E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 68.9617402431221, "minX": 1.71821844E12, "maxY": 141.70524899058069, "series": [{"data": [[1.71821844E12, 68.9617402431221], [1.71821856E12, 140.02429540404785], [1.7182185E12, 141.70524899058069]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821856E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 68.95662188099806, "minX": 1.71821844E12, "maxY": 141.703548912657, "series": [{"data": [[1.71821844E12, 68.95662188099806], [1.71821856E12, 140.02251198690192], [1.7182185E12, 141.703548912657]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821856E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.3335892514395398, "minX": 1.71821844E12, "maxY": 1.867110575901376, "series": [{"data": [[1.71821844E12, 0.3335892514395398], [1.71821856E12, 1.5715998128873665], [1.7182185E12, 1.867110575901376]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821856E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.71821844E12, "maxY": 2280.0, "series": [{"data": [[1.71821844E12, 2280.0], [1.71821856E12, 446.0], [1.7182185E12, 350.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71821844E12, 422.3999999999999], [1.71821856E12, 428.0], [1.7182185E12, 347.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71821844E12, 2280.0], [1.71821856E12, 446.0], [1.7182185E12, 350.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71821844E12, 2230.1], [1.71821856E12, 437.1], [1.7182185E12, 348.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71821844E12, 30.0], [1.71821856E12, 218.0], [1.7182185E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71821844E12, 98.0], [1.71821856E12, 350.0], [1.7182185E12, 332.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821856E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 39.0, "maxY": 2239.5, "series": [{"data": [[522.0, 159.0], [1116.0, 2239.5], [39.0, 53.0], [447.0, 332.0], [443.0, 350.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[522.0, 18.0], [524.0, 213.0], [532.0, 177.0], [607.0, 150.0], [578.0, 130.0], [668.0, 127.0], [691.0, 145.0], [699.0, 127.0], [711.0, 140.0], [713.0, 135.0], [731.0, 130.0], [710.0, 121.0], [758.0, 130.0], [765.0, 129.0], [754.0, 135.0], [753.0, 129.0], [751.0, 134.0], [749.0, 132.0], [752.0, 131.0], [780.0, 127.0], [781.0, 128.0], [785.0, 126.0], [789.0, 132.0], [798.0, 128.0], [800.0, 127.0], [813.0, 121.0], [806.0, 126.0], [808.0, 123.0], [807.0, 125.0], [805.0, 126.0], [812.0, 116.0], [804.0, 125.0], [803.0, 129.0], [890.0, 116.0], [1116.0, 21.0], [1264.0, 37.0], [1316.0, 8.0], [1384.0, 32.0], [1450.0, 24.0], [1427.0, 20.0], [1674.0, 34.0], [1848.0, 24.0], [1811.0, 33.0], [2001.0, 30.0], [2221.0, 24.0], [2506.0, 25.0], [2603.0, 28.0], [2613.0, 15.0], [2867.0, 33.0], [2898.0, 22.0], [2973.0, 32.0], [3014.0, 32.0], [363.0, 253.0], [383.0, 257.0], [395.0, 238.0], [410.0, 241.0], [413.0, 215.0], [407.0, 208.0], [415.0, 151.0], [422.0, 237.0], [420.0, 236.0], [429.0, 232.0], [424.0, 167.5], [427.0, 222.0], [425.0, 213.0], [434.0, 230.0], [447.0, 220.0], [444.0, 211.0], [446.0, 218.0], [445.0, 166.0], [441.0, 227.0], [443.0, 160.5], [442.0, 211.0], [438.0, 224.0], [433.0, 233.5], [436.0, 220.0], [432.0, 234.0], [439.0, 224.0], [435.0, 212.0], [448.0, 218.0], [461.0, 214.0], [451.0, 218.0], [453.0, 224.0], [456.0, 218.0], [457.0, 188.0], [454.0, 220.0], [455.0, 218.0], [450.0, 217.0], [449.0, 205.0], [482.0, 216.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3014.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 39.0, "maxY": 2239.5, "series": [{"data": [[522.0, 159.0], [1116.0, 2239.5], [39.0, 53.0], [447.0, 332.0], [443.0, 350.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[522.0, 18.0], [524.0, 213.0], [532.0, 177.0], [607.0, 150.0], [578.0, 130.0], [668.0, 127.0], [691.0, 145.0], [699.0, 127.0], [711.0, 140.0], [713.0, 135.0], [731.0, 130.0], [710.0, 121.0], [758.0, 130.0], [765.0, 129.0], [754.0, 135.0], [753.0, 129.0], [751.0, 134.0], [749.0, 132.0], [752.0, 131.0], [780.0, 127.0], [781.0, 128.0], [785.0, 126.0], [789.0, 132.0], [798.0, 128.0], [800.0, 127.0], [813.0, 121.0], [806.0, 126.0], [808.0, 123.0], [807.0, 125.0], [805.0, 126.0], [812.0, 116.0], [804.0, 125.0], [803.0, 129.0], [890.0, 116.0], [1116.0, 21.0], [1264.0, 37.0], [1316.0, 8.0], [1384.0, 32.0], [1450.0, 24.0], [1427.0, 20.0], [1674.0, 34.0], [1848.0, 24.0], [1811.0, 33.0], [2001.0, 30.0], [2221.0, 24.0], [2506.0, 25.0], [2603.0, 28.0], [2613.0, 15.0], [2867.0, 33.0], [2898.0, 22.0], [2973.0, 32.0], [3014.0, 32.0], [363.0, 253.0], [383.0, 257.0], [395.0, 238.0], [410.0, 241.0], [413.0, 215.0], [407.0, 208.0], [415.0, 151.0], [422.0, 237.0], [420.0, 236.0], [429.0, 232.0], [424.0, 167.5], [427.0, 222.0], [425.0, 213.0], [434.0, 230.0], [447.0, 220.0], [444.0, 211.0], [446.0, 218.0], [445.0, 166.0], [441.0, 227.0], [443.0, 160.5], [442.0, 211.0], [438.0, 224.0], [433.0, 233.5], [436.0, 220.0], [432.0, 234.0], [439.0, 224.0], [435.0, 212.0], [448.0, 218.0], [461.0, 214.0], [451.0, 218.0], [453.0, 224.0], [456.0, 218.0], [457.0, 188.0], [454.0, 220.0], [455.0, 218.0], [450.0, 217.0], [449.0, 205.0], [482.0, 216.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3014.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 392.4166666666667, "minX": 1.71821844E12, "maxY": 705.85, "series": [{"data": [[1.71821844E12, 392.4166666666667], [1.71821856E12, 568.4], [1.7182185E12, 705.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821856E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.71821844E12, "maxY": 409.1166666666667, "series": [{"data": [[1.71821844E12, 1.0], [1.71821856E12, 0.95], [1.7182185E12, 0.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71821856E12, 292.3333333333333], [1.7182185E12, 295.8833333333333]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.71821844E12, 389.75], [1.71821856E12, 276.78333333333336], [1.7182185E12, 409.1166666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71821856E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.71821844E12, "maxY": 705.0, "series": [{"data": [[1.71821844E12, 1.0], [1.71821856E12, 0.95], [1.7182185E12, 0.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71821844E12, 389.75], [1.71821856E12, 569.1166666666667], [1.7182185E12, 705.0]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821856E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.71821844E12, "maxY": 705.0, "series": [{"data": [[1.71821844E12, 1.0], [1.71821856E12, 0.95], [1.7182185E12, 0.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71821844E12, 389.75], [1.71821856E12, 569.1166666666667], [1.7182185E12, 705.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71821856E12, "title": "Total Transactions Per Second"}},
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

