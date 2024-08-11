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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 2324.0, "series": [{"data": [[0.0, 13.0], [0.1, 107.0], [0.2, 134.0], [0.3, 145.0], [0.4, 156.0], [0.5, 171.0], [0.6, 182.0], [0.7, 188.0], [0.8, 193.0], [0.9, 197.0], [1.0, 200.0], [1.1, 202.0], [1.2, 204.0], [1.3, 207.0], [1.4, 209.0], [1.5, 210.0], [1.6, 212.0], [1.7, 213.0], [1.8, 214.0], [1.9, 215.0], [2.0, 216.0], [2.1, 217.0], [2.2, 218.0], [2.3, 219.0], [2.4, 219.0], [2.5, 220.0], [2.6, 220.0], [2.7, 221.0], [2.8, 222.0], [2.9, 222.0], [3.0, 223.0], [3.1, 223.0], [3.2, 224.0], [3.3, 224.0], [3.4, 225.0], [3.5, 225.0], [3.6, 225.0], [3.7, 226.0], [3.8, 226.0], [3.9, 227.0], [4.0, 227.0], [4.1, 228.0], [4.2, 228.0], [4.3, 229.0], [4.4, 229.0], [4.5, 229.0], [4.6, 230.0], [4.7, 230.0], [4.8, 231.0], [4.9, 231.0], [5.0, 232.0], [5.1, 232.0], [5.2, 232.0], [5.3, 233.0], [5.4, 233.0], [5.5, 234.0], [5.6, 234.0], [5.7, 234.0], [5.8, 235.0], [5.9, 235.0], [6.0, 236.0], [6.1, 236.0], [6.2, 236.0], [6.3, 237.0], [6.4, 237.0], [6.5, 237.0], [6.6, 238.0], [6.7, 238.0], [6.8, 239.0], [6.9, 239.0], [7.0, 239.0], [7.1, 240.0], [7.2, 240.0], [7.3, 240.0], [7.4, 241.0], [7.5, 241.0], [7.6, 241.0], [7.7, 242.0], [7.8, 242.0], [7.9, 242.0], [8.0, 242.0], [8.1, 243.0], [8.2, 243.0], [8.3, 243.0], [8.4, 244.0], [8.5, 244.0], [8.6, 244.0], [8.7, 245.0], [8.8, 245.0], [8.9, 245.0], [9.0, 246.0], [9.1, 246.0], [9.2, 246.0], [9.3, 246.0], [9.4, 247.0], [9.5, 247.0], [9.6, 247.0], [9.7, 247.0], [9.8, 248.0], [9.9, 248.0], [10.0, 248.0], [10.1, 249.0], [10.2, 249.0], [10.3, 249.0], [10.4, 249.0], [10.5, 250.0], [10.6, 250.0], [10.7, 250.0], [10.8, 251.0], [10.9, 251.0], [11.0, 251.0], [11.1, 251.0], [11.2, 252.0], [11.3, 252.0], [11.4, 252.0], [11.5, 252.0], [11.6, 253.0], [11.7, 253.0], [11.8, 253.0], [11.9, 253.0], [12.0, 254.0], [12.1, 254.0], [12.2, 254.0], [12.3, 254.0], [12.4, 255.0], [12.5, 255.0], [12.6, 255.0], [12.7, 255.0], [12.8, 256.0], [12.9, 256.0], [13.0, 256.0], [13.1, 256.0], [13.2, 257.0], [13.3, 257.0], [13.4, 257.0], [13.5, 257.0], [13.6, 258.0], [13.7, 258.0], [13.8, 258.0], [13.9, 258.0], [14.0, 259.0], [14.1, 259.0], [14.2, 259.0], [14.3, 260.0], [14.4, 260.0], [14.5, 260.0], [14.6, 260.0], [14.7, 261.0], [14.8, 261.0], [14.9, 261.0], [15.0, 261.0], [15.1, 262.0], [15.2, 262.0], [15.3, 262.0], [15.4, 262.0], [15.5, 263.0], [15.6, 263.0], [15.7, 263.0], [15.8, 264.0], [15.9, 264.0], [16.0, 264.0], [16.1, 264.0], [16.2, 265.0], [16.3, 265.0], [16.4, 265.0], [16.5, 266.0], [16.6, 266.0], [16.7, 266.0], [16.8, 267.0], [16.9, 267.0], [17.0, 267.0], [17.1, 267.0], [17.2, 268.0], [17.3, 268.0], [17.4, 268.0], [17.5, 269.0], [17.6, 269.0], [17.7, 269.0], [17.8, 269.0], [17.9, 270.0], [18.0, 270.0], [18.1, 270.0], [18.2, 271.0], [18.3, 271.0], [18.4, 271.0], [18.5, 272.0], [18.6, 272.0], [18.7, 272.0], [18.8, 272.0], [18.9, 273.0], [19.0, 273.0], [19.1, 273.0], [19.2, 274.0], [19.3, 274.0], [19.4, 274.0], [19.5, 274.0], [19.6, 275.0], [19.7, 275.0], [19.8, 275.0], [19.9, 275.0], [20.0, 276.0], [20.1, 276.0], [20.2, 276.0], [20.3, 277.0], [20.4, 277.0], [20.5, 277.0], [20.6, 277.0], [20.7, 278.0], [20.8, 278.0], [20.9, 278.0], [21.0, 279.0], [21.1, 279.0], [21.2, 279.0], [21.3, 279.0], [21.4, 280.0], [21.5, 280.0], [21.6, 280.0], [21.7, 280.0], [21.8, 281.0], [21.9, 281.0], [22.0, 281.0], [22.1, 281.0], [22.2, 282.0], [22.3, 282.0], [22.4, 282.0], [22.5, 283.0], [22.6, 283.0], [22.7, 283.0], [22.8, 283.0], [22.9, 284.0], [23.0, 284.0], [23.1, 284.0], [23.2, 285.0], [23.3, 285.0], [23.4, 285.0], [23.5, 285.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 287.0], [24.0, 287.0], [24.1, 287.0], [24.2, 287.0], [24.3, 288.0], [24.4, 288.0], [24.5, 288.0], [24.6, 289.0], [24.7, 289.0], [24.8, 289.0], [24.9, 290.0], [25.0, 290.0], [25.1, 290.0], [25.2, 290.0], [25.3, 291.0], [25.4, 291.0], [25.5, 291.0], [25.6, 292.0], [25.7, 292.0], [25.8, 292.0], [25.9, 292.0], [26.0, 293.0], [26.1, 293.0], [26.2, 293.0], [26.3, 293.0], [26.4, 293.0], [26.5, 294.0], [26.6, 294.0], [26.7, 294.0], [26.8, 295.0], [26.9, 295.0], [27.0, 295.0], [27.1, 295.0], [27.2, 296.0], [27.3, 296.0], [27.4, 296.0], [27.5, 296.0], [27.6, 297.0], [27.7, 297.0], [27.8, 297.0], [27.9, 297.0], [28.0, 297.0], [28.1, 298.0], [28.2, 298.0], [28.3, 298.0], [28.4, 298.0], [28.5, 298.0], [28.6, 299.0], [28.7, 299.0], [28.8, 299.0], [28.9, 299.0], [29.0, 300.0], [29.1, 300.0], [29.2, 300.0], [29.3, 300.0], [29.4, 300.0], [29.5, 300.0], [29.6, 301.0], [29.7, 301.0], [29.8, 301.0], [29.9, 301.0], [30.0, 302.0], [30.1, 302.0], [30.2, 302.0], [30.3, 302.0], [30.4, 302.0], [30.5, 303.0], [30.6, 303.0], [30.7, 303.0], [30.8, 303.0], [30.9, 304.0], [31.0, 304.0], [31.1, 304.0], [31.2, 304.0], [31.3, 304.0], [31.4, 305.0], [31.5, 305.0], [31.6, 305.0], [31.7, 305.0], [31.8, 305.0], [31.9, 306.0], [32.0, 306.0], [32.1, 306.0], [32.2, 306.0], [32.3, 307.0], [32.4, 307.0], [32.5, 307.0], [32.6, 307.0], [32.7, 307.0], [32.8, 307.0], [32.9, 308.0], [33.0, 308.0], [33.1, 308.0], [33.2, 308.0], [33.3, 308.0], [33.4, 309.0], [33.5, 309.0], [33.6, 309.0], [33.7, 309.0], [33.8, 309.0], [33.9, 309.0], [34.0, 310.0], [34.1, 310.0], [34.2, 310.0], [34.3, 310.0], [34.4, 310.0], [34.5, 311.0], [34.6, 311.0], [34.7, 311.0], [34.8, 311.0], [34.9, 311.0], [35.0, 311.0], [35.1, 312.0], [35.2, 312.0], [35.3, 312.0], [35.4, 312.0], [35.5, 312.0], [35.6, 313.0], [35.7, 313.0], [35.8, 313.0], [35.9, 313.0], [36.0, 313.0], [36.1, 313.0], [36.2, 314.0], [36.3, 314.0], [36.4, 314.0], [36.5, 314.0], [36.6, 314.0], [36.7, 314.0], [36.8, 315.0], [36.9, 315.0], [37.0, 315.0], [37.1, 315.0], [37.2, 315.0], [37.3, 315.0], [37.4, 315.0], [37.5, 316.0], [37.6, 316.0], [37.7, 316.0], [37.8, 316.0], [37.9, 316.0], [38.0, 317.0], [38.1, 317.0], [38.2, 317.0], [38.3, 317.0], [38.4, 317.0], [38.5, 317.0], [38.6, 317.0], [38.7, 318.0], [38.8, 318.0], [38.9, 318.0], [39.0, 318.0], [39.1, 318.0], [39.2, 318.0], [39.3, 319.0], [39.4, 319.0], [39.5, 319.0], [39.6, 319.0], [39.7, 319.0], [39.8, 319.0], [39.9, 319.0], [40.0, 320.0], [40.1, 320.0], [40.2, 320.0], [40.3, 320.0], [40.4, 320.0], [40.5, 320.0], [40.6, 320.0], [40.7, 321.0], [40.8, 321.0], [40.9, 321.0], [41.0, 321.0], [41.1, 321.0], [41.2, 321.0], [41.3, 322.0], [41.4, 322.0], [41.5, 322.0], [41.6, 322.0], [41.7, 322.0], [41.8, 322.0], [41.9, 323.0], [42.0, 323.0], [42.1, 323.0], [42.2, 323.0], [42.3, 323.0], [42.4, 323.0], [42.5, 324.0], [42.6, 324.0], [42.7, 324.0], [42.8, 324.0], [42.9, 324.0], [43.0, 324.0], [43.1, 325.0], [43.2, 325.0], [43.3, 325.0], [43.4, 325.0], [43.5, 325.0], [43.6, 325.0], [43.7, 325.0], [43.8, 326.0], [43.9, 326.0], [44.0, 326.0], [44.1, 326.0], [44.2, 326.0], [44.3, 326.0], [44.4, 327.0], [44.5, 327.0], [44.6, 327.0], [44.7, 327.0], [44.8, 327.0], [44.9, 327.0], [45.0, 328.0], [45.1, 328.0], [45.2, 328.0], [45.3, 328.0], [45.4, 328.0], [45.5, 328.0], [45.6, 329.0], [45.7, 329.0], [45.8, 329.0], [45.9, 329.0], [46.0, 329.0], [46.1, 329.0], [46.2, 330.0], [46.3, 330.0], [46.4, 330.0], [46.5, 330.0], [46.6, 330.0], [46.7, 330.0], [46.8, 331.0], [46.9, 331.0], [47.0, 331.0], [47.1, 331.0], [47.2, 331.0], [47.3, 332.0], [47.4, 332.0], [47.5, 332.0], [47.6, 332.0], [47.7, 332.0], [47.8, 332.0], [47.9, 332.0], [48.0, 333.0], [48.1, 333.0], [48.2, 333.0], [48.3, 333.0], [48.4, 333.0], [48.5, 334.0], [48.6, 334.0], [48.7, 334.0], [48.8, 334.0], [48.9, 334.0], [49.0, 334.0], [49.1, 335.0], [49.2, 335.0], [49.3, 335.0], [49.4, 335.0], [49.5, 335.0], [49.6, 336.0], [49.7, 336.0], [49.8, 336.0], [49.9, 336.0], [50.0, 336.0], [50.1, 336.0], [50.2, 337.0], [50.3, 337.0], [50.4, 337.0], [50.5, 337.0], [50.6, 337.0], [50.7, 338.0], [50.8, 338.0], [50.9, 338.0], [51.0, 338.0], [51.1, 338.0], [51.2, 338.0], [51.3, 339.0], [51.4, 339.0], [51.5, 339.0], [51.6, 339.0], [51.7, 339.0], [51.8, 340.0], [51.9, 340.0], [52.0, 340.0], [52.1, 340.0], [52.2, 340.0], [52.3, 340.0], [52.4, 341.0], [52.5, 341.0], [52.6, 341.0], [52.7, 341.0], [52.8, 341.0], [52.9, 342.0], [53.0, 342.0], [53.1, 342.0], [53.2, 342.0], [53.3, 342.0], [53.4, 342.0], [53.5, 343.0], [53.6, 343.0], [53.7, 343.0], [53.8, 343.0], [53.9, 343.0], [54.0, 343.0], [54.1, 344.0], [54.2, 344.0], [54.3, 344.0], [54.4, 344.0], [54.5, 344.0], [54.6, 344.0], [54.7, 345.0], [54.8, 345.0], [54.9, 345.0], [55.0, 345.0], [55.1, 345.0], [55.2, 345.0], [55.3, 346.0], [55.4, 346.0], [55.5, 346.0], [55.6, 346.0], [55.7, 346.0], [55.8, 347.0], [55.9, 347.0], [56.0, 347.0], [56.1, 347.0], [56.2, 347.0], [56.3, 347.0], [56.4, 348.0], [56.5, 348.0], [56.6, 348.0], [56.7, 348.0], [56.8, 348.0], [56.9, 348.0], [57.0, 348.0], [57.1, 349.0], [57.2, 349.0], [57.3, 349.0], [57.4, 349.0], [57.5, 349.0], [57.6, 349.0], [57.7, 350.0], [57.8, 350.0], [57.9, 350.0], [58.0, 350.0], [58.1, 350.0], [58.2, 350.0], [58.3, 351.0], [58.4, 351.0], [58.5, 351.0], [58.6, 351.0], [58.7, 351.0], [58.8, 351.0], [58.9, 351.0], [59.0, 351.0], [59.1, 352.0], [59.2, 352.0], [59.3, 352.0], [59.4, 352.0], [59.5, 352.0], [59.6, 352.0], [59.7, 352.0], [59.8, 353.0], [59.9, 353.0], [60.0, 353.0], [60.1, 353.0], [60.2, 353.0], [60.3, 353.0], [60.4, 353.0], [60.5, 354.0], [60.6, 354.0], [60.7, 354.0], [60.8, 354.0], [60.9, 354.0], [61.0, 354.0], [61.1, 354.0], [61.2, 355.0], [61.3, 355.0], [61.4, 355.0], [61.5, 355.0], [61.6, 355.0], [61.7, 355.0], [61.8, 355.0], [61.9, 356.0], [62.0, 356.0], [62.1, 356.0], [62.2, 356.0], [62.3, 356.0], [62.4, 356.0], [62.5, 356.0], [62.6, 356.0], [62.7, 357.0], [62.8, 357.0], [62.9, 357.0], [63.0, 357.0], [63.1, 357.0], [63.2, 357.0], [63.3, 358.0], [63.4, 358.0], [63.5, 358.0], [63.6, 358.0], [63.7, 358.0], [63.8, 358.0], [63.9, 358.0], [64.0, 359.0], [64.1, 359.0], [64.2, 359.0], [64.3, 359.0], [64.4, 359.0], [64.5, 359.0], [64.6, 359.0], [64.7, 360.0], [64.8, 360.0], [64.9, 360.0], [65.0, 360.0], [65.1, 360.0], [65.2, 360.0], [65.3, 361.0], [65.4, 361.0], [65.5, 361.0], [65.6, 361.0], [65.7, 361.0], [65.8, 361.0], [65.9, 361.0], [66.0, 361.0], [66.1, 361.0], [66.2, 362.0], [66.3, 362.0], [66.4, 362.0], [66.5, 362.0], [66.6, 362.0], [66.7, 362.0], [66.8, 362.0], [66.9, 363.0], [67.0, 363.0], [67.1, 363.0], [67.2, 363.0], [67.3, 363.0], [67.4, 363.0], [67.5, 363.0], [67.6, 364.0], [67.7, 364.0], [67.8, 364.0], [67.9, 364.0], [68.0, 364.0], [68.1, 364.0], [68.2, 364.0], [68.3, 365.0], [68.4, 365.0], [68.5, 365.0], [68.6, 365.0], [68.7, 365.0], [68.8, 365.0], [68.9, 365.0], [69.0, 366.0], [69.1, 366.0], [69.2, 366.0], [69.3, 366.0], [69.4, 366.0], [69.5, 366.0], [69.6, 366.0], [69.7, 367.0], [69.8, 367.0], [69.9, 367.0], [70.0, 367.0], [70.1, 367.0], [70.2, 367.0], [70.3, 367.0], [70.4, 368.0], [70.5, 368.0], [70.6, 368.0], [70.7, 368.0], [70.8, 368.0], [70.9, 368.0], [71.0, 368.0], [71.1, 369.0], [71.2, 369.0], [71.3, 369.0], [71.4, 369.0], [71.5, 369.0], [71.6, 369.0], [71.7, 369.0], [71.8, 369.0], [71.9, 370.0], [72.0, 370.0], [72.1, 370.0], [72.2, 370.0], [72.3, 370.0], [72.4, 370.0], [72.5, 370.0], [72.6, 371.0], [72.7, 371.0], [72.8, 371.0], [72.9, 371.0], [73.0, 371.0], [73.1, 371.0], [73.2, 371.0], [73.3, 372.0], [73.4, 372.0], [73.5, 372.0], [73.6, 372.0], [73.7, 372.0], [73.8, 372.0], [73.9, 372.0], [74.0, 373.0], [74.1, 373.0], [74.2, 373.0], [74.3, 373.0], [74.4, 373.0], [74.5, 373.0], [74.6, 373.0], [74.7, 374.0], [74.8, 374.0], [74.9, 374.0], [75.0, 374.0], [75.1, 374.0], [75.2, 374.0], [75.3, 374.0], [75.4, 375.0], [75.5, 375.0], [75.6, 375.0], [75.7, 375.0], [75.8, 375.0], [75.9, 375.0], [76.0, 375.0], [76.1, 376.0], [76.2, 376.0], [76.3, 376.0], [76.4, 376.0], [76.5, 376.0], [76.6, 376.0], [76.7, 376.0], [76.8, 377.0], [76.9, 377.0], [77.0, 377.0], [77.1, 377.0], [77.2, 377.0], [77.3, 377.0], [77.4, 377.0], [77.5, 378.0], [77.6, 378.0], [77.7, 378.0], [77.8, 378.0], [77.9, 378.0], [78.0, 378.0], [78.1, 378.0], [78.2, 379.0], [78.3, 379.0], [78.4, 379.0], [78.5, 379.0], [78.6, 379.0], [78.7, 379.0], [78.8, 379.0], [78.9, 380.0], [79.0, 380.0], [79.1, 380.0], [79.2, 380.0], [79.3, 380.0], [79.4, 380.0], [79.5, 380.0], [79.6, 381.0], [79.7, 381.0], [79.8, 381.0], [79.9, 381.0], [80.0, 381.0], [80.1, 381.0], [80.2, 381.0], [80.3, 382.0], [80.4, 382.0], [80.5, 382.0], [80.6, 382.0], [80.7, 382.0], [80.8, 382.0], [80.9, 382.0], [81.0, 382.0], [81.1, 383.0], [81.2, 383.0], [81.3, 383.0], [81.4, 383.0], [81.5, 383.0], [81.6, 383.0], [81.7, 383.0], [81.8, 384.0], [81.9, 384.0], [82.0, 384.0], [82.1, 384.0], [82.2, 384.0], [82.3, 384.0], [82.4, 384.0], [82.5, 385.0], [82.6, 385.0], [82.7, 385.0], [82.8, 385.0], [82.9, 385.0], [83.0, 385.0], [83.1, 386.0], [83.2, 386.0], [83.3, 386.0], [83.4, 386.0], [83.5, 386.0], [83.6, 386.0], [83.7, 387.0], [83.8, 387.0], [83.9, 387.0], [84.0, 387.0], [84.1, 387.0], [84.2, 387.0], [84.3, 387.0], [84.4, 388.0], [84.5, 388.0], [84.6, 388.0], [84.7, 388.0], [84.8, 388.0], [84.9, 388.0], [85.0, 389.0], [85.1, 389.0], [85.2, 389.0], [85.3, 389.0], [85.4, 389.0], [85.5, 389.0], [85.6, 390.0], [85.7, 390.0], [85.8, 390.0], [85.9, 390.0], [86.0, 390.0], [86.1, 390.0], [86.2, 391.0], [86.3, 391.0], [86.4, 391.0], [86.5, 391.0], [86.6, 391.0], [86.7, 391.0], [86.8, 392.0], [86.9, 392.0], [87.0, 392.0], [87.1, 392.0], [87.2, 392.0], [87.3, 392.0], [87.4, 393.0], [87.5, 393.0], [87.6, 393.0], [87.7, 393.0], [87.8, 393.0], [87.9, 393.0], [88.0, 394.0], [88.1, 394.0], [88.2, 394.0], [88.3, 394.0], [88.4, 394.0], [88.5, 394.0], [88.6, 395.0], [88.7, 395.0], [88.8, 395.0], [88.9, 395.0], [89.0, 395.0], [89.1, 396.0], [89.2, 396.0], [89.3, 396.0], [89.4, 396.0], [89.5, 396.0], [89.6, 396.0], [89.7, 397.0], [89.8, 397.0], [89.9, 397.0], [90.0, 397.0], [90.1, 397.0], [90.2, 398.0], [90.3, 398.0], [90.4, 398.0], [90.5, 398.0], [90.6, 398.0], [90.7, 399.0], [90.8, 399.0], [90.9, 399.0], [91.0, 399.0], [91.1, 399.0], [91.2, 400.0], [91.3, 400.0], [91.4, 400.0], [91.5, 400.0], [91.6, 401.0], [91.7, 401.0], [91.8, 401.0], [91.9, 401.0], [92.0, 402.0], [92.1, 402.0], [92.2, 402.0], [92.3, 402.0], [92.4, 403.0], [92.5, 403.0], [92.6, 403.0], [92.7, 403.0], [92.8, 404.0], [92.9, 404.0], [93.0, 404.0], [93.1, 405.0], [93.2, 405.0], [93.3, 405.0], [93.4, 406.0], [93.5, 406.0], [93.6, 406.0], [93.7, 407.0], [93.8, 407.0], [93.9, 407.0], [94.0, 408.0], [94.1, 408.0], [94.2, 408.0], [94.3, 409.0], [94.4, 409.0], [94.5, 410.0], [94.6, 410.0], [94.7, 411.0], [94.8, 411.0], [94.9, 411.0], [95.0, 412.0], [95.1, 412.0], [95.2, 413.0], [95.3, 413.0], [95.4, 414.0], [95.5, 414.0], [95.6, 415.0], [95.7, 416.0], [95.8, 416.0], [95.9, 417.0], [96.0, 417.0], [96.1, 418.0], [96.2, 418.0], [96.3, 419.0], [96.4, 419.0], [96.5, 420.0], [96.6, 420.0], [96.7, 421.0], [96.8, 421.0], [96.9, 422.0], [97.0, 423.0], [97.1, 424.0], [97.2, 424.0], [97.3, 425.0], [97.4, 426.0], [97.5, 427.0], [97.6, 427.0], [97.7, 428.0], [97.8, 429.0], [97.9, 431.0], [98.0, 432.0], [98.1, 433.0], [98.2, 435.0], [98.3, 436.0], [98.4, 437.0], [98.5, 439.0], [98.6, 441.0], [98.7, 442.0], [98.8, 445.0], [98.9, 448.0], [99.0, 451.0], [99.1, 456.0], [99.2, 459.0], [99.3, 462.0], [99.4, 468.0], [99.5, 477.0], [99.6, 493.0], [99.7, 512.0], [99.8, 603.0], [99.9, 852.0], [100.0, 2324.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 62135.0, "series": [{"data": [[0.0, 93.0], [2200.0, 2.0], [2300.0, 2.0], [600.0, 34.0], [700.0, 46.0], [200.0, 27988.0], [800.0, 33.0], [900.0, 38.0], [1000.0, 22.0], [1100.0, 19.0], [300.0, 62135.0], [1200.0, 5.0], [100.0, 902.0], [400.0, 8537.0], [500.0, 144.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 99658.0, "series": [{"data": [[0.0, 99658.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 338.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 78.46863691194224, "minX": 1.71821982E12, "maxY": 100.0, "series": [{"data": [[1.71822006E12, 100.0], [1.71821988E12, 100.0], [1.71822018E12, 78.46863691194224], [1.71822E12, 100.0], [1.71821982E12, 92.30591824283087], [1.71822012E12, 100.0], [1.71821994E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822018E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 357.3874538745386, "series": [{"data": [[2.0, 16.0], [3.0, 20.0], [4.0, 49.0], [5.0, 148.5], [6.0, 107.77777777777777], [7.0, 94.66666666666667], [8.0, 65.5], [9.0, 100.33333333333333], [10.0, 81.50000000000001], [11.0, 92.22222222222223], [12.0, 95.71428571428572], [13.0, 83.33333333333333], [14.0, 91.6923076923077], [15.0, 135.4], [16.0, 117.57142857142857], [17.0, 122.23076923076923], [18.0, 125.69230769230771], [19.0, 156.66666666666663], [20.0, 266.6], [21.0, 139.4375], [22.0, 146.0909090909091], [23.0, 174.99999999999997], [24.0, 186.1428571428572], [25.0, 213.47826086956525], [26.0, 162.31578947368422], [27.0, 304.05882352941177], [28.0, 177.73333333333335], [29.0, 289.7894736842105], [30.0, 241.4324324324325], [31.0, 160.47222222222223], [32.0, 154.77777777777783], [33.0, 207.25490196078428], [34.0, 203.33333333333334], [35.0, 165.41025641025644], [36.0, 190.8421052631579], [37.0, 199.65384615384616], [38.0, 173.78823529411767], [39.0, 217.05714285714288], [40.0, 207.10000000000002], [41.0, 208.95454545454544], [42.0, 218.95238095238096], [43.0, 241.62499999999991], [44.0, 227.9375], [45.0, 200.29999999999998], [46.0, 243.76666666666662], [47.0, 257.17857142857144], [48.0, 217.36363636363635], [49.0, 280.2692307692308], [50.0, 320.0], [51.0, 245.5342465753425], [52.0, 272.25], [53.0, 242.72093023255817], [54.0, 253.37499999999997], [55.0, 255.94285714285712], [56.0, 256.59183673469386], [57.0, 218.79999999999998], [58.0, 236.14285714285722], [59.0, 241.48571428571432], [60.0, 256.09090909090907], [61.0, 248.4418604651163], [62.0, 259.42553191489367], [63.0, 258.6129032258064], [64.0, 279.5090909090909], [65.0, 274.18749999999994], [66.0, 284.4594594594595], [67.0, 290.06097560975616], [68.0, 285.72151898734177], [69.0, 290.03191489361706], [70.0, 289.65789473684214], [71.0, 260.178082191781], [72.0, 299.5882352941177], [73.0, 335.741935483871], [74.0, 336.63934426229497], [75.0, 331.41269841269843], [76.0, 341.04166666666674], [77.0, 336.71428571428567], [78.0, 323.4871794871794], [79.0, 328.1764705882353], [80.0, 317.35555555555555], [81.0, 336.01886792452825], [82.0, 319.9090909090909], [83.0, 311.7692307692308], [84.0, 335.61290322580646], [85.0, 355.93750000000006], [86.0, 286.87500000000006], [87.0, 321.42105263157896], [88.0, 355.5699481865284], [89.0, 283.7272727272727], [90.0, 339.88181818181823], [91.0, 321.49450549450563], [92.0, 353.14705882352945], [93.0, 274.9047619047619], [94.0, 356.6294820717132], [95.0, 255.37209302325584], [96.0, 298.5633802816901], [97.0, 357.3874538745386], [98.0, 326.1466666666666], [99.0, 275.0869565217392], [100.0, 333.1577852138447], [1.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.65548999999871, 331.0445599999978]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8566.333333333334, "minX": 1.71821982E12, "maxY": 183425.1, "series": [{"data": [[1.71822006E12, 144175.35], [1.71821988E12, 183425.1], [1.71822018E12, 29346.6], [1.71822E12, 154936.95], [1.71821982E12, 72525.75], [1.71822012E12, 136723.65], [1.71821994E12, 163866.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71822006E12, 42085.083333333336], [1.71821988E12, 53542.166666666664], [1.71822018E12, 8566.333333333334], [1.71822E12, 45226.416666666664], [1.71821982E12, 21170.416666666668], [1.71822012E12, 39909.916666666664], [1.71821994E12, 47833.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822018E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 248.6572300183035, "minX": 1.71821982E12, "maxY": 388.23367208233395, "series": [{"data": [[1.71822006E12, 368.083420293414], [1.71821988E12, 289.3321914503532], [1.71822018E12, 325.306996381182], [1.71822E12, 342.7128005940484], [1.71821982E12, 248.6572300183035], [1.71822012E12, 388.23367208233395], [1.71821994E12, 323.89020306761785]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822018E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 248.6457596095189, "minX": 1.71821982E12, "maxY": 388.2303061686853, "series": [{"data": [[1.71822006E12, 368.0807194156287], [1.71821988E12, 289.32924828717444], [1.71822018E12, 325.30367913148274], [1.71822E12, 342.7090306734434], [1.71821982E12, 248.6457596095189], [1.71822012E12, 388.2303061686853], [1.71821994E12, 323.8870706416045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822018E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71821982E12, "maxY": 2.759067801450841, "series": [{"data": [[1.71822006E12, 0.03811920692406854], [1.71821988E12, 1.2824471678085594], [1.71822018E12, 0.0], [1.71822E12, 2.759067801450841], [1.71821982E12, 0.8516168395363042], [1.71822012E12, 0.0264094763415107], [1.71821994E12, 2.0039425361849283]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822018E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.71821982E12, "maxY": 2324.0, "series": [{"data": [[1.71822006E12, 551.0], [1.71821988E12, 1047.0], [1.71822018E12, 584.0], [1.71822E12, 1282.0], [1.71821982E12, 2324.0], [1.71822012E12, 563.0], [1.71821994E12, 1203.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71822006E12, 413.0], [1.71821988E12, 345.0], [1.71822018E12, 425.0], [1.71822E12, 394.0], [1.71821982E12, 280.0], [1.71822012E12, 414.0], [1.71821994E12, 382.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71822006E12, 461.0799999999999], [1.71821988E12, 388.0], [1.71822018E12, 511.8299999999999], [1.71822E12, 445.0], [1.71821982E12, 351.03999999999996], [1.71822012E12, 459.0], [1.71821994E12, 433.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71822006E12, 426.0], [1.71821988E12, 357.0], [1.71822018E12, 438.0], [1.71822E12, 403.0], [1.71821982E12, 305.0], [1.71822012E12, 428.0], [1.71821994E12, 400.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71822006E12, 179.0], [1.71821988E12, 105.0], [1.71822018E12, 13.0], [1.71822E12, 158.0], [1.71821982E12, 50.0], [1.71822012E12, 214.0], [1.71821994E12, 163.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71822006E12, 363.0], [1.71821988E12, 290.0], [1.71822018E12, 363.0], [1.71822E12, 333.0], [1.71821982E12, 247.0], [1.71822012E12, 387.0], [1.71821994E12, 315.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822018E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 90.0, "minX": 3.0, "maxY": 422.0, "series": [{"data": [[3.0, 183.0], [52.0, 93.0], [85.0, 170.0], [109.0, 90.0], [129.0, 210.0], [157.0, 231.0], [174.0, 278.0], [210.0, 317.5], [223.0, 422.0], [226.0, 419.0], [230.0, 411.0], [225.0, 347.0], [236.0, 251.5], [233.0, 400.0], [234.0, 401.0], [237.0, 422.0], [238.0, 406.0], [235.0, 391.0], [246.0, 317.0], [242.0, 401.0], [247.0, 376.0], [245.0, 384.0], [240.0, 396.0], [241.0, 421.0], [243.0, 404.0], [249.0, 360.0], [250.0, 385.0], [251.0, 361.0], [255.0, 384.5], [248.0, 391.0], [252.0, 391.0], [254.0, 383.5], [253.0, 385.0], [259.0, 388.0], [262.0, 374.0], [266.0, 370.0], [265.0, 382.0], [267.0, 378.0], [260.0, 383.0], [261.0, 385.0], [257.0, 395.0], [271.0, 371.0], [270.0, 368.0], [269.0, 366.0], [268.0, 276.0], [258.0, 389.0], [263.0, 376.0], [256.0, 392.0], [264.0, 378.0], [273.0, 354.0], [278.0, 356.0], [285.0, 352.0], [282.0, 363.0], [283.0, 355.0], [281.0, 356.0], [275.0, 361.0], [274.0, 370.0], [284.0, 356.0], [277.0, 364.0], [276.0, 360.0], [286.0, 347.0], [287.0, 374.0], [280.0, 356.0], [279.0, 358.0], [301.0, 324.0], [302.0, 334.0], [300.0, 335.5], [290.0, 350.0], [291.0, 333.5], [299.0, 337.0], [297.0, 333.0], [294.0, 363.0], [295.0, 367.0], [293.0, 339.0], [298.0, 330.0], [288.0, 355.5], [296.0, 335.0], [303.0, 331.0], [318.0, 312.0], [309.0, 321.0], [308.0, 327.0], [313.0, 320.0], [311.0, 313.0], [304.0, 330.0], [310.0, 324.0], [317.0, 315.0], [316.0, 318.0], [307.0, 322.0], [306.0, 332.0], [305.0, 325.0], [315.0, 321.0], [319.0, 314.0], [312.0, 322.0], [320.0, 319.0], [335.0, 297.0], [321.0, 316.0], [331.0, 302.0], [328.0, 312.0], [330.0, 314.0], [322.0, 314.0], [350.0, 288.0], [346.0, 292.0], [347.0, 316.0], [340.0, 288.5], [343.0, 294.0], [342.0, 288.0], [351.0, 286.0], [341.0, 292.0], [348.0, 285.0], [337.0, 300.0], [367.0, 259.0], [358.0, 280.0], [354.0, 309.0], [359.0, 281.0], [352.0, 285.0], [362.0, 272.0], [363.0, 278.0], [364.0, 273.0], [360.0, 279.0], [361.0, 280.0], [382.0, 253.0], [373.0, 319.0], [377.0, 265.5], [372.0, 268.0], [374.0, 264.0], [370.0, 267.0], [368.0, 271.0], [397.0, 254.0], [395.0, 251.0], [393.0, 247.0], [392.0, 249.0], [413.0, 246.0], [409.0, 245.0], [400.0, 248.0], [407.0, 244.0], [406.0, 251.0], [405.0, 244.0], [404.0, 247.0], [408.0, 247.0], [401.0, 248.0], [415.0, 235.0], [412.0, 240.0], [402.0, 249.0], [414.0, 233.0], [423.0, 237.5], [419.0, 234.0], [425.0, 232.0], [417.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 425.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 90.0, "minX": 3.0, "maxY": 422.0, "series": [{"data": [[3.0, 179.0], [52.0, 93.0], [85.0, 170.0], [109.0, 90.0], [129.0, 210.0], [157.0, 231.0], [174.0, 278.0], [210.0, 317.5], [223.0, 422.0], [226.0, 419.0], [230.0, 411.0], [225.0, 347.0], [236.0, 251.5], [233.0, 400.0], [234.0, 401.0], [237.0, 422.0], [238.0, 406.0], [235.0, 391.0], [246.0, 317.0], [242.0, 401.0], [247.0, 376.0], [245.0, 384.0], [240.0, 396.0], [241.0, 421.0], [243.0, 404.0], [249.0, 360.0], [250.0, 385.0], [251.0, 361.0], [255.0, 384.0], [248.0, 391.0], [252.0, 391.0], [254.0, 383.5], [253.0, 385.0], [259.0, 388.0], [262.0, 374.0], [266.0, 370.0], [265.0, 382.0], [267.0, 378.0], [260.0, 383.0], [261.0, 385.0], [257.0, 395.0], [271.0, 371.0], [270.0, 368.0], [269.0, 366.0], [268.0, 276.0], [258.0, 389.0], [263.0, 376.0], [256.0, 392.0], [264.0, 378.0], [273.0, 353.0], [278.0, 356.0], [285.0, 352.0], [282.0, 363.0], [283.0, 355.0], [281.0, 356.0], [275.0, 361.0], [274.0, 370.0], [284.0, 356.0], [277.0, 364.0], [276.0, 360.0], [286.0, 347.0], [287.0, 374.0], [280.0, 356.0], [279.0, 358.0], [301.0, 324.0], [302.0, 334.0], [300.0, 335.5], [290.0, 350.0], [291.0, 333.5], [299.0, 337.0], [297.0, 333.0], [294.0, 363.0], [295.0, 367.0], [293.0, 339.0], [298.0, 330.0], [288.0, 355.5], [296.0, 335.0], [303.0, 331.0], [318.0, 312.0], [309.0, 321.0], [308.0, 327.0], [313.0, 320.0], [311.0, 313.0], [304.0, 330.0], [310.0, 324.0], [317.0, 315.0], [316.0, 318.0], [307.0, 322.0], [306.0, 332.0], [305.0, 325.0], [315.0, 321.0], [319.0, 314.0], [312.0, 322.0], [320.0, 319.0], [335.0, 297.0], [321.0, 316.0], [331.0, 302.0], [328.0, 312.0], [330.0, 314.0], [322.0, 314.0], [350.0, 288.0], [346.0, 292.0], [347.0, 316.0], [340.0, 288.5], [343.0, 294.0], [342.0, 288.0], [351.0, 286.0], [341.0, 292.0], [348.0, 285.0], [337.0, 300.0], [367.0, 259.0], [358.0, 280.0], [354.0, 309.0], [359.0, 281.0], [352.0, 285.0], [362.0, 272.0], [363.0, 278.0], [364.0, 273.0], [360.0, 279.0], [361.0, 280.0], [382.0, 253.0], [373.0, 319.0], [377.0, 265.5], [372.0, 268.0], [374.0, 264.0], [370.0, 267.0], [368.0, 271.0], [397.0, 254.0], [395.0, 251.0], [393.0, 247.0], [392.0, 249.0], [413.0, 246.0], [409.0, 245.0], [400.0, 248.0], [407.0, 244.0], [406.0, 251.0], [405.0, 244.0], [404.0, 247.0], [408.0, 247.0], [401.0, 248.0], [415.0, 235.0], [412.0, 240.0], [402.0, 249.0], [414.0, 233.0], [423.0, 237.5], [419.0, 234.0], [425.0, 232.0], [417.0, 242.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 425.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 53.6, "minX": 1.71821982E12, "maxY": 345.45, "series": [{"data": [[1.71822006E12, 271.51666666666665], [1.71821988E12, 345.45], [1.71822018E12, 53.6], [1.71822E12, 291.78333333333336], [1.71821982E12, 138.23333333333332], [1.71822012E12, 257.48333333333335], [1.71821994E12, 308.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822018E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 55.266666666666666, "minX": 1.71821982E12, "maxY": 345.43333333333334, "series": [{"data": [[1.71822006E12, 271.51666666666665], [1.71821988E12, 345.43333333333334], [1.71822018E12, 55.266666666666666], [1.71822E12, 291.78333333333336], [1.71821982E12, 136.58333333333334], [1.71822012E12, 257.48333333333335], [1.71821994E12, 308.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71822018E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 55.266666666666666, "minX": 1.71821982E12, "maxY": 345.43333333333334, "series": [{"data": [[1.71822006E12, 271.51666666666665], [1.71821988E12, 345.43333333333334], [1.71822018E12, 55.266666666666666], [1.71822E12, 291.78333333333336], [1.71821982E12, 136.58333333333334], [1.71822012E12, 257.48333333333335], [1.71821994E12, 308.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822018E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 55.266666666666666, "minX": 1.71821982E12, "maxY": 345.43333333333334, "series": [{"data": [[1.71822006E12, 271.51666666666665], [1.71821988E12, 345.43333333333334], [1.71822018E12, 55.266666666666666], [1.71822E12, 291.78333333333336], [1.71821982E12, 136.58333333333334], [1.71822012E12, 257.48333333333335], [1.71821994E12, 308.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71822018E12, "title": "Total Transactions Per Second"}},
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

