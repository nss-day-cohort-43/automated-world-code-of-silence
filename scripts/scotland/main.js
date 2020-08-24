/*
*   importing from other .js files allows us to keep html clean with ONE <script> 
*   tag that references each of the other <script> tags that may be included in the project
*/

import {useCity} from './cities/CityDataProvider.js';
import {useLandmark} from './landmarks/LandmarkDataProvider.js';
import {useLeader} from './leaders/LeaderDataProvider.js';

import {CityList} from './cities/CityList.js';
import {LandmarkList} from './landmarks/LandmarkList.js';
import {LeaderList} from './leaders/LeaderList.js';

CityList();
LandmarkList();
LeaderList();