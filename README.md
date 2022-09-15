# LocAI

<p align="center">
  <br>
  <img src="https://user-images.githubusercontent.com/72423836/190433541-4ee4c15b-a0e3-46a6-844d-6c5478bcde1a.png" width="300">
  <img src="https://user-images.githubusercontent.com/72423836/190435261-cb77e4eb-337b-42ab-9398-cb26d07ed79b.png" width="300">
  
  <br>
</p>

## 프로젝트 소개

### 프로젝트 개요/목표

첫째, 공공시설에서의 혼잡 상황을 실시간으로 확인할 수 있도록 하여 **혼잡 상황으로 인해 발생할 수 있는 사고의 가능성을 줄인다.** 또한, **화장실 등의 다중이용시설에서의 혼잡도** 또한 파악할 수 있도록 하여 시설의 활용도를 더욱 높일 수 있다.  
  
둘째, 대학교 축제와 같은 큰 행사가 개최될 때, **개최자와의 서비스 연동을 통해 축제장소 곳곳의 혼잡도를 시각적으로 나타내어** 혼잡 상황이 오랫동안 지속되지 않도록 막는다.  
또한, 놀이동산과 같이 인파가 계속적으로 많이 몰리는 시설과 서비스 연동을 통해 시설이 더욱 효율적으로 쓰일 수 있도록 하여 **해당 시설에 대한 이용이 원활하도록** 도와준다. 선례로, 지난해 6월부터 서울교통공사가 도입한 지하철 혼잡도 서비스 시범운영 결과, 시간대별 표준편차가 최대 30% 이상 감소하였다는 결과가 있다.   
  
셋째, 자동제세동기의 위치나 공공기관에서의 비상구나 대피로 등의 위치는 구글맵 또는 네이버 지도와 같은 기존의 지도 어플에 검색해도 대부분 나오지 않는다. 이 때문에 도심지에서의 응급상황 발생 시 빠른 대처가 어려운 경우가 많다. 이와 같은 문제점을 인식하여, 이 서비스는 **AED 제세동기나 비상구, 대피로 등의 정보를 사전에 제시하여 응급상황 발생 시 사람들의 빠른 대처를 돕는다.** 이는 콘서트처럼 좁은 공간에 다수가 모이는 상황이 발생하였을 때 큰 효과를 발휘할 것이라 생각된다.  
  
 넷째, **별다른 로그인 혹은 회원가입이 없는 서비스 방식** 을 이용하여 사용자의 접근성을 높여 더욱 많은 인원이 서비스를 사용할 수 있도록 하였다. 어는 사람들이 더욱 편리하게 서비스를 이용할 수 있도록 하여 유저를 확보하고, 이는 서비스의 신뢰도와 정확도 향상으로 이어진다.  
  
 다섯째, 사용자의 위치 정보를 받아올 수 있다는 점을 활용해, 아동이 해당 서비스를 이용하게 될 경우 사전에 그의 보호자로 등록된 사용자에게는 해당 아동의 위치만 다른 아이콘으로 표시된다. 이를 통해 아동이 혼잡구간에 들어설 시 위치 정보를 부모에게 공유할 수 있게 되므로 미아 발생 가능성을 낮출 수 있다.  

<br>

## 기술 스택

| JavaScript | Html |  Css   |  Django   |
| :--------: | :--: | :----: | :-------: |
|   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">    | <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> | <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> | <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> |


<br>

## 메인 기능
  <img src="https://user-images.githubusercontent.com/72423836/190435261-cb77e4eb-337b-42ab-9398-cb26d07ed79b.png" width="300">
서비스에 접속한 사용자 수를 토대로, 특정 구역의 현재 인구 혼잡도를 안내해 줌

### 기능 1
  <img src="https://user-images.githubusercontent.com/72423836/190433541-4ee4c15b-a0e3-46a6-844d-6c5478bcde1a.png" width="300">
그룹 사용자로 등록한 사용자끼리는 각 사용자의 아이콘을 클릭하여 서로의 위치를 공유할 수 있게함.  
사진에서 빨간색 위치는 같은 그룹 사용자의 현위치로, 오른쪽 위 '그룹' 버튼을 누르면 그룹 사용자 보기를 해제/설정 할 수 있음.  


### 기능 2
<img src="(https://user-images.githubusercontent.com/69004675/190439738-bd2a52f8-d39a-47ea-b0f7-b5b1df2e7dfa.png" width="300">

비상구 / 화장실 / AED 자동제세동기 등의 위치를 안내함.   
왼쪽 위 세가지 버튼을 통해 각각의 시설의 위치를 확인할 수 있음.

### 기능 3 (추후 추가할 예정)
‘내 아이 위치 찾기’기능을 이용하여 미아 방지에 도움을 줌.

<br>

## 보완해야 할 점
이번 프로젝트에서 사용하였던 Kakao Map API는 Geolocation 이라는 API를 사용하여 사용자의 현재 위치 정보를 받아온다.  
하지만, Geolocation API를 이용하여 받아온 현재 위치는 생각보다 정확하지 않았고, 이는 위치의 정확도가 필수적인 요소인 우리 프로젝트에 적합하지 않았다. 따라서 우리는 다른 방안을 검토해 보았으나, Kakao Map API와 연동이 되며, 보다 정확하게 사용자의 정확한 위치를 받아오는 API를 찾을 수 없었다. 따라서 어쩔 수 없이 Geolocation API를 이용하여 서비스를 구현하였는데, 추후에 서비스를 고도화할 수 있게 된다면 이 부분부터 보완하여야 할 것 같다.  

<p align="justify">
  
</p>

<br>

## 라이센스

MIT &copy; [NoHack](mailto:lbjp114@gmail.com)
