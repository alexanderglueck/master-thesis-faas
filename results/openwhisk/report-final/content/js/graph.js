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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 24699.0, "series": [{"data": [[0.0, 9.0], [0.1, 15.0], [0.2, 16.0], [0.3, 17.0], [0.4, 18.0], [0.5, 19.0], [0.6, 20.0], [0.7, 20.0], [0.8, 21.0], [0.9, 21.0], [1.0, 22.0], [1.1, 22.0], [1.2, 23.0], [1.3, 23.0], [1.4, 23.0], [1.5, 24.0], [1.6, 24.0], [1.7, 24.0], [1.8, 25.0], [1.9, 25.0], [2.0, 25.0], [2.1, 26.0], [2.2, 26.0], [2.3, 26.0], [2.4, 27.0], [2.5, 27.0], [2.6, 27.0], [2.7, 28.0], [2.8, 28.0], [2.9, 28.0], [3.0, 28.0], [3.1, 29.0], [3.2, 29.0], [3.3, 29.0], [3.4, 29.0], [3.5, 30.0], [3.6, 30.0], [3.7, 30.0], [3.8, 30.0], [3.9, 31.0], [4.0, 31.0], [4.1, 31.0], [4.2, 31.0], [4.3, 32.0], [4.4, 32.0], [4.5, 32.0], [4.6, 32.0], [4.7, 33.0], [4.8, 33.0], [4.9, 33.0], [5.0, 33.0], [5.1, 33.0], [5.2, 34.0], [5.3, 34.0], [5.4, 34.0], [5.5, 34.0], [5.6, 34.0], [5.7, 35.0], [5.8, 35.0], [5.9, 35.0], [6.0, 35.0], [6.1, 35.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 37.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 38.0], [7.3, 38.0], [7.4, 38.0], [7.5, 38.0], [7.6, 38.0], [7.7, 39.0], [7.8, 39.0], [7.9, 39.0], [8.0, 39.0], [8.1, 39.0], [8.2, 40.0], [8.3, 40.0], [8.4, 40.0], [8.5, 40.0], [8.6, 40.0], [8.7, 41.0], [8.8, 41.0], [8.9, 41.0], [9.0, 41.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 43.0], [9.8, 43.0], [9.9, 43.0], [10.0, 43.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 45.0], [11.1, 45.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 47.0], [11.8, 47.0], [11.9, 47.0], [12.0, 47.0], [12.1, 47.0], [12.2, 48.0], [12.3, 48.0], [12.4, 48.0], [12.5, 48.0], [12.6, 48.0], [12.7, 48.0], [12.8, 49.0], [12.9, 49.0], [13.0, 49.0], [13.1, 49.0], [13.2, 49.0], [13.3, 50.0], [13.4, 50.0], [13.5, 50.0], [13.6, 50.0], [13.7, 50.0], [13.8, 50.0], [13.9, 51.0], [14.0, 51.0], [14.1, 51.0], [14.2, 51.0], [14.3, 51.0], [14.4, 52.0], [14.5, 52.0], [14.6, 52.0], [14.7, 52.0], [14.8, 52.0], [14.9, 53.0], [15.0, 53.0], [15.1, 53.0], [15.2, 53.0], [15.3, 53.0], [15.4, 53.0], [15.5, 54.0], [15.6, 54.0], [15.7, 54.0], [15.8, 54.0], [15.9, 54.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 55.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 57.0], [17.1, 57.0], [17.2, 57.0], [17.3, 57.0], [17.4, 57.0], [17.5, 58.0], [17.6, 58.0], [17.7, 58.0], [17.8, 58.0], [17.9, 58.0], [18.0, 58.0], [18.1, 59.0], [18.2, 59.0], [18.3, 59.0], [18.4, 59.0], [18.5, 59.0], [18.6, 60.0], [18.7, 60.0], [18.8, 60.0], [18.9, 60.0], [19.0, 60.0], [19.1, 61.0], [19.2, 61.0], [19.3, 61.0], [19.4, 61.0], [19.5, 61.0], [19.6, 62.0], [19.7, 62.0], [19.8, 62.0], [19.9, 62.0], [20.0, 62.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 63.0], [20.5, 63.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 65.0], [21.2, 65.0], [21.3, 65.0], [21.4, 65.0], [21.5, 65.0], [21.6, 66.0], [21.7, 66.0], [21.8, 66.0], [21.9, 66.0], [22.0, 66.0], [22.1, 66.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 67.0], [22.7, 68.0], [22.8, 68.0], [22.9, 68.0], [23.0, 68.0], [23.1, 69.0], [23.2, 69.0], [23.3, 69.0], [23.4, 69.0], [23.5, 69.0], [23.6, 70.0], [23.7, 70.0], [23.8, 70.0], [23.9, 70.0], [24.0, 70.0], [24.1, 71.0], [24.2, 71.0], [24.3, 71.0], [24.4, 71.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 72.0], [24.9, 72.0], [25.0, 73.0], [25.1, 73.0], [25.2, 73.0], [25.3, 73.0], [25.4, 74.0], [25.5, 74.0], [25.6, 74.0], [25.7, 74.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 75.0], [26.2, 75.0], [26.3, 76.0], [26.4, 76.0], [26.5, 76.0], [26.6, 76.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 78.0], [27.2, 78.0], [27.3, 78.0], [27.4, 78.0], [27.5, 78.0], [27.6, 79.0], [27.7, 79.0], [27.8, 79.0], [27.9, 79.0], [28.0, 80.0], [28.1, 80.0], [28.2, 80.0], [28.3, 80.0], [28.4, 81.0], [28.5, 81.0], [28.6, 81.0], [28.7, 81.0], [28.8, 82.0], [28.9, 82.0], [29.0, 82.0], [29.1, 82.0], [29.2, 83.0], [29.3, 83.0], [29.4, 83.0], [29.5, 83.0], [29.6, 84.0], [29.7, 84.0], [29.8, 84.0], [29.9, 84.0], [30.0, 85.0], [30.1, 85.0], [30.2, 85.0], [30.3, 85.0], [30.4, 86.0], [30.5, 86.0], [30.6, 86.0], [30.7, 87.0], [30.8, 87.0], [30.9, 87.0], [31.0, 87.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 89.0], [31.6, 89.0], [31.7, 89.0], [31.8, 89.0], [31.9, 90.0], [32.0, 90.0], [32.1, 90.0], [32.2, 91.0], [32.3, 91.0], [32.4, 91.0], [32.5, 91.0], [32.6, 92.0], [32.7, 92.0], [32.8, 92.0], [32.9, 93.0], [33.0, 93.0], [33.1, 93.0], [33.2, 93.0], [33.3, 94.0], [33.4, 94.0], [33.5, 94.0], [33.6, 95.0], [33.7, 95.0], [33.8, 95.0], [33.9, 96.0], [34.0, 96.0], [34.1, 96.0], [34.2, 96.0], [34.3, 97.0], [34.4, 97.0], [34.5, 97.0], [34.6, 98.0], [34.7, 98.0], [34.8, 98.0], [34.9, 99.0], [35.0, 99.0], [35.1, 99.0], [35.2, 100.0], [35.3, 100.0], [35.4, 100.0], [35.5, 101.0], [35.6, 101.0], [35.7, 101.0], [35.8, 102.0], [35.9, 102.0], [36.0, 102.0], [36.1, 102.0], [36.2, 103.0], [36.3, 103.0], [36.4, 103.0], [36.5, 104.0], [36.6, 104.0], [36.7, 104.0], [36.8, 105.0], [36.9, 105.0], [37.0, 105.0], [37.1, 106.0], [37.2, 106.0], [37.3, 107.0], [37.4, 107.0], [37.5, 107.0], [37.6, 108.0], [37.7, 108.0], [37.8, 108.0], [37.9, 109.0], [38.0, 109.0], [38.1, 109.0], [38.2, 110.0], [38.3, 110.0], [38.4, 110.0], [38.5, 111.0], [38.6, 111.0], [38.7, 112.0], [38.8, 112.0], [38.9, 112.0], [39.0, 113.0], [39.1, 113.0], [39.2, 113.0], [39.3, 114.0], [39.4, 114.0], [39.5, 114.0], [39.6, 115.0], [39.7, 115.0], [39.8, 116.0], [39.9, 116.0], [40.0, 116.0], [40.1, 117.0], [40.2, 117.0], [40.3, 117.0], [40.4, 118.0], [40.5, 118.0], [40.6, 119.0], [40.7, 119.0], [40.8, 119.0], [40.9, 120.0], [41.0, 120.0], [41.1, 121.0], [41.2, 121.0], [41.3, 122.0], [41.4, 122.0], [41.5, 123.0], [41.6, 123.0], [41.7, 123.0], [41.8, 124.0], [41.9, 124.0], [42.0, 125.0], [42.1, 125.0], [42.2, 125.0], [42.3, 126.0], [42.4, 126.0], [42.5, 127.0], [42.6, 127.0], [42.7, 128.0], [42.8, 128.0], [42.9, 129.0], [43.0, 129.0], [43.1, 129.0], [43.2, 130.0], [43.3, 130.0], [43.4, 131.0], [43.5, 131.0], [43.6, 132.0], [43.7, 132.0], [43.8, 132.0], [43.9, 133.0], [44.0, 133.0], [44.1, 134.0], [44.2, 134.0], [44.3, 135.0], [44.4, 135.0], [44.5, 136.0], [44.6, 136.0], [44.7, 136.0], [44.8, 137.0], [44.9, 137.0], [45.0, 138.0], [45.1, 138.0], [45.2, 139.0], [45.3, 139.0], [45.4, 140.0], [45.5, 140.0], [45.6, 141.0], [45.7, 141.0], [45.8, 142.0], [45.9, 142.0], [46.0, 143.0], [46.1, 143.0], [46.2, 144.0], [46.3, 144.0], [46.4, 144.0], [46.5, 145.0], [46.6, 145.0], [46.7, 146.0], [46.8, 146.0], [46.9, 147.0], [47.0, 147.0], [47.1, 148.0], [47.2, 148.0], [47.3, 149.0], [47.4, 149.0], [47.5, 150.0], [47.6, 150.0], [47.7, 151.0], [47.8, 151.0], [47.9, 152.0], [48.0, 152.0], [48.1, 153.0], [48.2, 153.0], [48.3, 154.0], [48.4, 154.0], [48.5, 155.0], [48.6, 156.0], [48.7, 156.0], [48.8, 157.0], [48.9, 157.0], [49.0, 158.0], [49.1, 158.0], [49.2, 159.0], [49.3, 159.0], [49.4, 160.0], [49.5, 160.0], [49.6, 161.0], [49.7, 161.0], [49.8, 162.0], [49.9, 162.0], [50.0, 163.0], [50.1, 163.0], [50.2, 164.0], [50.3, 164.0], [50.4, 165.0], [50.5, 165.0], [50.6, 166.0], [50.7, 166.0], [50.8, 167.0], [50.9, 168.0], [51.0, 168.0], [51.1, 169.0], [51.2, 169.0], [51.3, 169.0], [51.4, 170.0], [51.5, 171.0], [51.6, 171.0], [51.7, 171.0], [51.8, 172.0], [51.9, 173.0], [52.0, 173.0], [52.1, 174.0], [52.2, 174.0], [52.3, 175.0], [52.4, 175.0], [52.5, 176.0], [52.6, 176.0], [52.7, 177.0], [52.8, 177.0], [52.9, 177.0], [53.0, 178.0], [53.1, 179.0], [53.2, 179.0], [53.3, 180.0], [53.4, 180.0], [53.5, 181.0], [53.6, 181.0], [53.7, 182.0], [53.8, 182.0], [53.9, 183.0], [54.0, 183.0], [54.1, 184.0], [54.2, 185.0], [54.3, 185.0], [54.4, 186.0], [54.5, 186.0], [54.6, 187.0], [54.7, 187.0], [54.8, 188.0], [54.9, 188.0], [55.0, 189.0], [55.1, 190.0], [55.2, 190.0], [55.3, 191.0], [55.4, 191.0], [55.5, 192.0], [55.6, 192.0], [55.7, 193.0], [55.8, 193.0], [55.9, 194.0], [56.0, 194.0], [56.1, 195.0], [56.2, 195.0], [56.3, 196.0], [56.4, 196.0], [56.5, 197.0], [56.6, 198.0], [56.7, 198.0], [56.8, 199.0], [56.9, 199.0], [57.0, 200.0], [57.1, 200.0], [57.2, 201.0], [57.3, 201.0], [57.4, 202.0], [57.5, 203.0], [57.6, 203.0], [57.7, 204.0], [57.8, 204.0], [57.9, 205.0], [58.0, 205.0], [58.1, 206.0], [58.2, 206.0], [58.3, 207.0], [58.4, 207.0], [58.5, 208.0], [58.6, 208.0], [58.7, 209.0], [58.8, 209.0], [58.9, 210.0], [59.0, 211.0], [59.1, 211.0], [59.2, 212.0], [59.3, 212.0], [59.4, 213.0], [59.5, 213.0], [59.6, 214.0], [59.7, 214.0], [59.8, 215.0], [59.9, 216.0], [60.0, 216.0], [60.1, 217.0], [60.2, 217.0], [60.3, 218.0], [60.4, 218.0], [60.5, 219.0], [60.6, 219.0], [60.7, 220.0], [60.8, 220.0], [60.9, 221.0], [61.0, 221.0], [61.1, 222.0], [61.2, 223.0], [61.3, 223.0], [61.4, 224.0], [61.5, 224.0], [61.6, 225.0], [61.7, 226.0], [61.8, 226.0], [61.9, 227.0], [62.0, 227.0], [62.1, 228.0], [62.2, 228.0], [62.3, 229.0], [62.4, 229.0], [62.5, 230.0], [62.6, 231.0], [62.7, 231.0], [62.8, 232.0], [62.9, 232.0], [63.0, 233.0], [63.1, 233.0], [63.2, 234.0], [63.3, 234.0], [63.4, 235.0], [63.5, 236.0], [63.6, 236.0], [63.7, 237.0], [63.8, 237.0], [63.9, 238.0], [64.0, 238.0], [64.1, 239.0], [64.2, 240.0], [64.3, 240.0], [64.4, 241.0], [64.5, 241.0], [64.6, 242.0], [64.7, 243.0], [64.8, 243.0], [64.9, 244.0], [65.0, 245.0], [65.1, 245.0], [65.2, 246.0], [65.3, 246.0], [65.4, 247.0], [65.5, 248.0], [65.6, 248.0], [65.7, 249.0], [65.8, 249.0], [65.9, 250.0], [66.0, 251.0], [66.1, 251.0], [66.2, 252.0], [66.3, 253.0], [66.4, 253.0], [66.5, 254.0], [66.6, 255.0], [66.7, 255.0], [66.8, 256.0], [66.9, 257.0], [67.0, 257.0], [67.1, 258.0], [67.2, 258.0], [67.3, 259.0], [67.4, 259.0], [67.5, 260.0], [67.6, 261.0], [67.7, 261.0], [67.8, 262.0], [67.9, 263.0], [68.0, 263.0], [68.1, 264.0], [68.2, 264.0], [68.3, 265.0], [68.4, 266.0], [68.5, 266.0], [68.6, 267.0], [68.7, 267.0], [68.8, 268.0], [68.9, 269.0], [69.0, 269.0], [69.1, 270.0], [69.2, 271.0], [69.3, 271.0], [69.4, 272.0], [69.5, 273.0], [69.6, 273.0], [69.7, 274.0], [69.8, 274.0], [69.9, 275.0], [70.0, 276.0], [70.1, 276.0], [70.2, 277.0], [70.3, 278.0], [70.4, 278.0], [70.5, 279.0], [70.6, 279.0], [70.7, 280.0], [70.8, 281.0], [70.9, 281.0], [71.0, 282.0], [71.1, 282.0], [71.2, 283.0], [71.3, 284.0], [71.4, 284.0], [71.5, 285.0], [71.6, 285.0], [71.7, 286.0], [71.8, 287.0], [71.9, 287.0], [72.0, 288.0], [72.1, 289.0], [72.2, 289.0], [72.3, 290.0], [72.4, 290.0], [72.5, 291.0], [72.6, 292.0], [72.7, 292.0], [72.8, 293.0], [72.9, 294.0], [73.0, 294.0], [73.1, 295.0], [73.2, 295.0], [73.3, 296.0], [73.4, 297.0], [73.5, 297.0], [73.6, 298.0], [73.7, 299.0], [73.8, 299.0], [73.9, 300.0], [74.0, 300.0], [74.1, 301.0], [74.2, 302.0], [74.3, 302.0], [74.4, 303.0], [74.5, 304.0], [74.6, 304.0], [74.7, 305.0], [74.8, 305.0], [74.9, 306.0], [75.0, 307.0], [75.1, 307.0], [75.2, 308.0], [75.3, 308.0], [75.4, 309.0], [75.5, 310.0], [75.6, 310.0], [75.7, 311.0], [75.8, 312.0], [75.9, 312.0], [76.0, 313.0], [76.1, 313.0], [76.2, 314.0], [76.3, 315.0], [76.4, 315.0], [76.5, 316.0], [76.6, 316.0], [76.7, 317.0], [76.8, 317.0], [76.9, 318.0], [77.0, 319.0], [77.1, 319.0], [77.2, 320.0], [77.3, 321.0], [77.4, 321.0], [77.5, 322.0], [77.6, 322.0], [77.7, 323.0], [77.8, 323.0], [77.9, 324.0], [78.0, 325.0], [78.1, 325.0], [78.2, 326.0], [78.3, 326.0], [78.4, 327.0], [78.5, 327.0], [78.6, 328.0], [78.7, 329.0], [78.8, 329.0], [78.9, 330.0], [79.0, 330.0], [79.1, 331.0], [79.2, 332.0], [79.3, 332.0], [79.4, 333.0], [79.5, 333.0], [79.6, 334.0], [79.7, 335.0], [79.8, 335.0], [79.9, 336.0], [80.0, 336.0], [80.1, 337.0], [80.2, 338.0], [80.3, 338.0], [80.4, 339.0], [80.5, 339.0], [80.6, 340.0], [80.7, 341.0], [80.8, 341.0], [80.9, 342.0], [81.0, 342.0], [81.1, 343.0], [81.2, 344.0], [81.3, 344.0], [81.4, 345.0], [81.5, 346.0], [81.6, 346.0], [81.7, 347.0], [81.8, 348.0], [81.9, 348.0], [82.0, 349.0], [82.1, 350.0], [82.2, 350.0], [82.3, 351.0], [82.4, 352.0], [82.5, 352.0], [82.6, 353.0], [82.7, 354.0], [82.8, 354.0], [82.9, 355.0], [83.0, 356.0], [83.1, 356.0], [83.2, 357.0], [83.3, 358.0], [83.4, 359.0], [83.5, 359.0], [83.6, 360.0], [83.7, 361.0], [83.8, 361.0], [83.9, 362.0], [84.0, 363.0], [84.1, 363.0], [84.2, 364.0], [84.3, 365.0], [84.4, 366.0], [84.5, 367.0], [84.6, 367.0], [84.7, 368.0], [84.8, 369.0], [84.9, 369.0], [85.0, 370.0], [85.1, 371.0], [85.2, 372.0], [85.3, 372.0], [85.4, 373.0], [85.5, 374.0], [85.6, 375.0], [85.7, 375.0], [85.8, 376.0], [85.9, 377.0], [86.0, 378.0], [86.1, 379.0], [86.2, 380.0], [86.3, 380.0], [86.4, 381.0], [86.5, 382.0], [86.6, 383.0], [86.7, 384.0], [86.8, 385.0], [86.9, 385.0], [87.0, 386.0], [87.1, 387.0], [87.2, 388.0], [87.3, 389.0], [87.4, 389.0], [87.5, 390.0], [87.6, 391.0], [87.7, 392.0], [87.8, 393.0], [87.9, 394.0], [88.0, 394.0], [88.1, 395.0], [88.2, 396.0], [88.3, 397.0], [88.4, 398.0], [88.5, 399.0], [88.6, 400.0], [88.7, 400.0], [88.8, 401.0], [88.9, 402.0], [89.0, 403.0], [89.1, 404.0], [89.2, 405.0], [89.3, 406.0], [89.4, 407.0], [89.5, 408.0], [89.6, 408.0], [89.7, 409.0], [89.8, 410.0], [89.9, 411.0], [90.0, 412.0], [90.1, 413.0], [90.2, 414.0], [90.3, 414.0], [90.4, 415.0], [90.5, 416.0], [90.6, 417.0], [90.7, 418.0], [90.8, 419.0], [90.9, 420.0], [91.0, 421.0], [91.1, 422.0], [91.2, 423.0], [91.3, 424.0], [91.4, 424.0], [91.5, 426.0], [91.6, 426.0], [91.7, 427.0], [91.8, 428.0], [91.9, 429.0], [92.0, 430.0], [92.1, 432.0], [92.2, 433.0], [92.3, 434.0], [92.4, 435.0], [92.5, 436.0], [92.6, 437.0], [92.7, 438.0], [92.8, 439.0], [92.9, 441.0], [93.0, 442.0], [93.1, 443.0], [93.2, 444.0], [93.3, 445.0], [93.4, 447.0], [93.5, 448.0], [93.6, 449.0], [93.7, 451.0], [93.8, 452.0], [93.9, 454.0], [94.0, 455.0], [94.1, 456.0], [94.2, 457.0], [94.3, 459.0], [94.4, 460.0], [94.5, 462.0], [94.6, 463.0], [94.7, 465.0], [94.8, 466.0], [94.9, 468.0], [95.0, 469.0], [95.1, 471.0], [95.2, 473.0], [95.3, 475.0], [95.4, 476.0], [95.5, 478.0], [95.6, 479.0], [95.7, 481.0], [95.8, 483.0], [95.9, 485.0], [96.0, 486.0], [96.1, 488.0], [96.2, 490.0], [96.3, 492.0], [96.4, 494.0], [96.5, 496.0], [96.6, 498.0], [96.7, 500.0], [96.8, 502.0], [96.9, 504.0], [97.0, 507.0], [97.1, 510.0], [97.2, 512.0], [97.3, 515.0], [97.4, 517.0], [97.5, 521.0], [97.6, 525.0], [97.7, 529.0], [97.8, 533.0], [97.9, 539.0], [98.0, 543.0], [98.1, 549.0], [98.2, 555.0], [98.3, 562.0], [98.4, 569.0], [98.5, 580.0], [98.6, 593.0], [98.7, 618.0], [98.8, 662.0], [98.9, 723.0], [99.0, 813.0], [99.1, 958.0], [99.2, 1064.0], [99.3, 1123.0], [99.4, 1179.0], [99.5, 1226.0], [99.6, 1278.0], [99.7, 1349.0], [99.8, 1546.0], [99.9, 3424.0], [100.0, 24699.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 35170.0, "series": [{"data": [[0.0, 35170.0], [600.0, 222.0], [700.0, 133.0], [800.0, 80.0], [900.0, 72.0], [1000.0, 110.0], [1100.0, 199.0], [1200.0, 189.0], [1300.0, 96.0], [1400.0, 50.0], [1500.0, 26.0], [1600.0, 7.0], [1700.0, 3.0], [1800.0, 6.0], [1900.0, 4.0], [2000.0, 4.0], [2100.0, 1.0], [2300.0, 3.0], [2200.0, 2.0], [2400.0, 7.0], [2500.0, 3.0], [2600.0, 5.0], [2800.0, 6.0], [2700.0, 3.0], [2900.0, 6.0], [3000.0, 3.0], [3100.0, 9.0], [3300.0, 9.0], [3200.0, 6.0], [3400.0, 4.0], [3500.0, 5.0], [3700.0, 2.0], [3600.0, 3.0], [3800.0, 4.0], [3900.0, 5.0], [4000.0, 6.0], [4300.0, 6.0], [4200.0, 4.0], [4100.0, 4.0], [4600.0, 2.0], [4400.0, 1.0], [4700.0, 3.0], [4800.0, 1.0], [5100.0, 3.0], [5000.0, 3.0], [4900.0, 2.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 2.0], [5500.0, 3.0], [5700.0, 1.0], [5800.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6600.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8600.0, 3.0], [8900.0, 1.0], [9200.0, 2.0], [9300.0, 2.0], [9400.0, 1.0], [9500.0, 1.0], [16100.0, 1.0], [17100.0, 1.0], [17200.0, 1.0], [17700.0, 1.0], [19200.0, 1.0], [19400.0, 1.0], [22000.0, 1.0], [22300.0, 1.0], [22600.0, 1.0], [22900.0, 1.0], [23600.0, 1.0], [23800.0, 2.0], [24200.0, 1.0], [24600.0, 1.0], [100.0, 21782.0], [200.0, 16879.0], [300.0, 14768.0], [400.0, 8069.0], [500.0, 1966.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 215.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 96711.0, "series": [{"data": [[0.0, 96711.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3074.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 215.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.37450722733249, "minX": 1.71865608E12, "maxY": 100.0, "series": [{"data": [[1.7186562E12, 100.0], [1.71865632E12, 36.37450722733249], [1.71865614E12, 100.0], [1.71865626E12, 96.88854566112833], [1.71865608E12, 97.39505218399698]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865632E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10.1875, "minX": 1.0, "maxY": 762.2857142857144, "series": [{"data": [[2.0, 11.8], [3.0, 15.999999999999998], [4.0, 17.333333333333332], [5.0, 57.75], [6.0, 18.045454545454554], [7.0, 83.3], [8.0, 37.519999999999996], [9.0, 65.82142857142857], [10.0, 66.375], [11.0, 109.0], [12.0, 60.0], [13.0, 166.66666666666669], [14.0, 71.3076923076923], [15.0, 156.57142857142858], [16.0, 55.73076923076924], [17.0, 71.52542372881355], [18.0, 65.37500000000001], [19.0, 64.87499999999999], [20.0, 52.91111111111111], [21.0, 94.76000000000002], [22.0, 90.22222222222221], [23.0, 81.27777777777777], [24.0, 103.95238095238096], [25.0, 91.18181818181819], [26.0, 64.73913043478262], [27.0, 71.40909090909089], [28.0, 75.3658536585366], [29.0, 225.89473684210523], [30.0, 80.41666666666667], [31.0, 169.07692307692307], [32.0, 75.0508474576271], [33.0, 117.75000000000003], [34.0, 127.77419354838709], [35.0, 78.41666666666666], [36.0, 135.46017699115052], [37.0, 104.26923076923077], [38.0, 94.43442622950818], [39.0, 123.81914893617015], [40.0, 319.22222222222223], [41.0, 133.9], [42.0, 174.70000000000002], [43.0, 218.5], [44.0, 234.75000000000006], [45.0, 160.89552238805965], [46.0, 235.62500000000003], [47.0, 318.72727272727275], [49.0, 145.60975609756102], [48.0, 152.5], [50.0, 155.1451612903226], [51.0, 133.24999999999997], [52.0, 192.55555555555563], [53.0, 127.19230769230771], [54.0, 171.99999999999997], [55.0, 415.3333333333333], [56.0, 144.23913043478254], [57.0, 168.70769230769227], [58.0, 169.92000000000002], [59.0, 231.08333333333331], [60.0, 157.2173913043478], [61.0, 130.76623376623377], [62.0, 149.7021276595745], [63.0, 192.0175438596491], [64.0, 125.43243243243245], [65.0, 268.23809523809524], [66.0, 159.23076923076937], [67.0, 152.35526315789465], [68.0, 162.77443609022555], [69.0, 243.84615384615378], [70.0, 167.5164319248825], [71.0, 182.23529411764707], [72.0, 211.91406249999997], [73.0, 213.70000000000002], [74.0, 199.16806722689074], [75.0, 238.80952380952382], [76.0, 221.04411764705893], [77.0, 216.03636363636363], [78.0, 198.6904761904762], [79.0, 200.29268292682931], [80.0, 224.18934911242607], [81.0, 231.40331491712712], [82.0, 762.2857142857144], [83.0, 209.89603960396036], [84.0, 224.79608938547486], [85.0, 338.58715596330285], [86.0, 190.04166666666666], [87.0, 215.68634686346857], [88.0, 201.2342342342343], [89.0, 268.7572254335263], [90.0, 212.48214285714278], [91.0, 282.1176470588235], [92.0, 312.5420560747663], [93.0, 208.15719063545149], [94.0, 226.14035087719301], [95.0, 230.65277777777771], [96.0, 228.7923904052935], [97.0, 237.468330134357], [98.0, 211.18983050847456], [99.0, 219.27363184079618], [100.0, 214.48666821751942], [1.0, 10.1875]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[97.88574999999943, 213.15892000000173]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3678.1666666666665, "minX": 1.71865608E12, "maxY": 304220.9166666667, "series": [{"data": [[1.7186562E12, 297387.4666666667], [1.71865632E12, 15269.616666666667], [1.71865614E12, 304220.9166666667], [1.71865626E12, 282560.11666666664], [1.71865608E12, 103896.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7186562E12, 71634.83333333333], [1.71865632E12, 3678.1666666666665], [1.71865614E12, 73283.0], [1.71865626E12, 68063.0], [1.71865608E12, 25007.666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865632E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 87.86399474375834, "minX": 1.71865608E12, "maxY": 326.5221298801696, "series": [{"data": [[1.7186562E12, 202.43185345118388], [1.71865632E12, 87.86399474375834], [1.71865614E12, 197.69647803719798], [1.71865626E12, 206.21641102116246], [1.71865608E12, 326.5221298801696]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865632E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 87.86136662286476, "minX": 1.71865608E12, "maxY": 326.51091998453774, "series": [{"data": [[1.7186562E12, 202.42827744416704], [1.71865632E12, 87.86136662286476], [1.71865614E12, 197.69248779844264], [1.71865626E12, 206.2119372248258], [1.71865608E12, 326.51091998453774]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865632E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71865608E12, "maxY": 13.586200231928846, "series": [{"data": [[1.7186562E12, 8.988799676135251], [1.71865632E12, 0.0], [1.71865614E12, 7.908191531460206], [1.71865626E12, 0.1349595227950556], [1.71865608E12, 13.586200231928846]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865632E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9.0, "minX": 1.71865608E12, "maxY": 24699.0, "series": [{"data": [[1.7186562E12, 9571.0], [1.71865632E12, 383.0], [1.71865614E12, 5859.0], [1.71865626E12, 668.0], [1.71865608E12, 24699.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7186562E12, 364.0], [1.71865632E12, 221.0], [1.71865614E12, 417.0], [1.71865626E12, 474.0], [1.71865608E12, 668.1000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7186562E12, 468.0], [1.71865632E12, 338.0799999999999], [1.71865614E12, 539.9900000000016], [1.71865626E12, 568.0], [1.71865608E12, 1459.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7186562E12, 405.0], [1.71865632E12, 248.8499999999999], [1.71865614E12, 456.0], [1.71865626E12, 513.0], [1.71865608E12, 1150.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7186562E12, 12.0], [1.71865632E12, 9.0], [1.71865614E12, 10.0], [1.71865626E12, 12.0], [1.71865608E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7186562E12, 184.0], [1.71865632E12, 57.5], [1.71865614E12, 144.0], [1.71865626E12, 137.0], [1.71865608E12, 199.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24.0, "minX": 13.0, "maxY": 660.0, "series": [{"data": [[13.0, 155.0], [37.0, 152.0], [52.0, 216.5], [55.0, 99.0], [64.0, 284.5], [83.0, 220.0], [81.0, 195.0], [93.0, 302.0], [107.0, 483.0], [114.0, 595.0], [117.0, 660.0], [127.0, 530.0], [146.0, 353.5], [149.0, 493.0], [152.0, 311.5], [155.0, 381.0], [154.0, 439.0], [163.0, 322.0], [179.0, 192.0], [191.0, 348.0], [200.0, 24.0], [214.0, 162.0], [211.0, 120.0], [216.0, 179.5], [243.0, 196.0], [280.0, 161.0], [327.0, 133.0], [392.0, 182.0], [404.0, 159.0], [407.0, 134.0], [424.0, 209.0], [420.0, 209.5], [417.0, 121.0], [421.0, 214.0], [429.0, 143.0], [426.0, 149.0], [435.0, 127.5], [442.0, 174.0], [438.0, 87.0], [437.0, 198.5], [433.0, 246.0], [446.0, 71.5], [447.0, 79.0], [436.0, 67.0], [439.0, 53.0], [451.0, 169.0], [457.0, 187.0], [454.0, 147.5], [452.0, 71.0], [449.0, 197.0], [448.0, 157.5], [463.0, 198.0], [462.0, 246.0], [456.0, 80.5], [459.0, 134.0], [458.0, 107.0], [455.0, 156.0], [450.0, 119.5], [477.0, 198.0], [479.0, 131.5], [470.0, 113.0], [469.0, 173.0], [468.0, 114.5], [467.0, 229.0], [476.0, 92.0], [472.0, 152.5], [475.0, 166.0], [473.0, 165.0], [474.0, 110.0], [464.0, 251.0], [471.0, 100.0], [478.0, 153.5], [483.0, 189.0], [481.0, 170.0], [485.0, 213.0], [484.0, 100.0], [488.0, 148.5], [495.0, 154.0], [494.0, 217.0], [493.0, 145.0], [492.0, 240.5], [491.0, 186.0], [490.0, 84.0], [489.0, 130.0], [480.0, 180.5], [487.0, 197.0], [486.0, 158.0], [482.0, 238.0], [508.0, 96.0], [511.0, 202.0], [504.0, 192.0], [505.0, 81.0], [506.0, 217.0], [500.0, 177.5], [501.0, 186.0], [510.0, 128.0], [509.0, 213.0], [503.0, 147.0], [496.0, 179.0], [498.0, 225.0], [499.0, 169.0], [507.0, 128.0], [502.0, 117.0], [517.0, 184.0], [539.0, 151.0], [520.0, 192.0], [521.0, 220.0], [523.0, 77.0], [524.0, 125.0], [522.0, 210.0], [540.0, 226.0], [537.0, 140.0], [536.0, 139.0], [518.0, 211.5], [519.0, 123.0], [538.0, 144.0], [541.0, 156.0], [531.0, 168.0], [530.0, 160.5], [532.0, 133.5], [533.0, 173.0], [534.0, 194.0], [535.0, 209.0], [529.0, 130.5], [528.0, 103.5], [516.0, 183.5], [515.0, 124.0], [527.0, 124.5], [526.0, 159.0], [514.0, 215.5], [513.0, 218.0], [512.0, 152.5], [525.0, 131.5], [544.0, 171.5], [562.0, 162.5], [551.0, 147.0], [557.0, 145.0], [547.0, 147.0], [553.0, 130.0], [546.0, 169.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 562.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 24.0, "minX": 13.0, "maxY": 660.0, "series": [{"data": [[13.0, 155.0], [37.0, 152.0], [52.0, 216.5], [55.0, 99.0], [64.0, 284.0], [83.0, 220.0], [81.0, 195.0], [93.0, 302.0], [107.0, 483.0], [114.0, 595.0], [117.0, 660.0], [127.0, 530.0], [146.0, 353.5], [149.0, 493.0], [152.0, 311.5], [155.0, 381.0], [154.0, 439.0], [163.0, 322.0], [179.0, 192.0], [191.0, 348.0], [200.0, 24.0], [214.0, 162.0], [211.0, 120.0], [216.0, 179.5], [243.0, 196.0], [280.0, 161.0], [327.0, 133.0], [392.0, 182.0], [404.0, 159.0], [407.0, 134.0], [424.0, 209.0], [420.0, 209.5], [417.0, 121.0], [421.0, 214.0], [429.0, 143.0], [426.0, 149.0], [435.0, 127.5], [442.0, 174.0], [438.0, 87.0], [437.0, 198.5], [433.0, 246.0], [446.0, 71.5], [447.0, 79.0], [436.0, 67.0], [439.0, 53.0], [451.0, 169.0], [457.0, 187.0], [454.0, 147.5], [452.0, 71.0], [449.0, 197.0], [448.0, 157.5], [463.0, 198.0], [462.0, 246.0], [456.0, 80.5], [459.0, 134.0], [458.0, 107.0], [455.0, 156.0], [450.0, 119.5], [477.0, 198.0], [479.0, 131.5], [470.0, 113.0], [469.0, 173.0], [468.0, 114.5], [467.0, 229.0], [476.0, 92.0], [472.0, 152.5], [475.0, 166.0], [473.0, 165.0], [474.0, 110.0], [464.0, 251.0], [471.0, 100.0], [478.0, 153.5], [483.0, 189.0], [481.0, 170.0], [485.0, 213.0], [484.0, 100.0], [488.0, 148.5], [495.0, 154.0], [494.0, 217.0], [493.0, 145.0], [492.0, 240.5], [491.0, 186.0], [490.0, 84.0], [489.0, 130.0], [480.0, 180.5], [487.0, 197.0], [486.0, 158.0], [482.0, 238.0], [508.0, 96.0], [511.0, 202.0], [504.0, 192.0], [505.0, 81.0], [506.0, 217.0], [500.0, 177.5], [501.0, 186.0], [510.0, 128.0], [509.0, 213.0], [503.0, 147.0], [496.0, 179.0], [498.0, 225.0], [499.0, 169.0], [507.0, 128.0], [502.0, 117.0], [517.0, 184.0], [539.0, 151.0], [520.0, 192.0], [521.0, 220.0], [523.0, 77.0], [524.0, 125.0], [522.0, 210.0], [540.0, 226.0], [537.0, 140.0], [536.0, 139.0], [518.0, 211.5], [519.0, 123.0], [538.0, 144.0], [541.0, 156.0], [531.0, 168.0], [530.0, 160.5], [532.0, 133.5], [533.0, 173.0], [534.0, 194.0], [535.0, 209.0], [529.0, 130.5], [528.0, 103.5], [516.0, 183.5], [515.0, 124.0], [527.0, 124.5], [526.0, 159.0], [514.0, 215.5], [513.0, 218.0], [512.0, 152.5], [525.0, 131.5], [544.0, 171.5], [562.0, 162.5], [551.0, 147.0], [557.0, 145.0], [547.0, 147.0], [553.0, 130.0], [546.0, 169.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 562.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 24.4, "minX": 1.71865608E12, "maxY": 505.4, "series": [{"data": [[1.7186562E12, 494.03333333333336], [1.71865632E12, 24.4], [1.71865614E12, 505.4], [1.71865626E12, 468.7], [1.71865608E12, 174.13333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865632E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 25.366666666666667, "minX": 1.71865608E12, "maxY": 505.4, "series": [{"data": [[1.7186562E12, 494.03333333333336], [1.71865632E12, 25.366666666666667], [1.71865614E12, 505.4], [1.71865626E12, 469.4], [1.71865608E12, 172.46666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71865632E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 25.366666666666667, "minX": 1.71865608E12, "maxY": 505.4, "series": [{"data": [[1.7186562E12, 494.03333333333336], [1.71865632E12, 25.366666666666667], [1.71865614E12, 505.4], [1.71865626E12, 469.4], [1.71865608E12, 172.46666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865632E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 25.366666666666667, "minX": 1.71865608E12, "maxY": 505.4, "series": [{"data": [[1.7186562E12, 494.03333333333336], [1.71865632E12, 25.366666666666667], [1.71865614E12, 505.4], [1.71865626E12, 469.4], [1.71865608E12, 172.46666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71865632E12, "title": "Total Transactions Per Second"}},
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

