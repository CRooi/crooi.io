<template>
<div id="background">
    <div id="title">👋 Hi,<br>im CRooi.</div>
    <br>
    👀 Freshman, majoring in software engineering.
    <br>
    👨‍💻 Studying Front-end development.
    <br><br>
    <a href="https://github.com/CRooi" class="socialNetwork github">
        <i class="ri-github-fill" style="position: relative; top: -1px; font-size: 1.2rem;"></i>&nbsp;Github</a>
    <a href="https://twitter.com/CRooi_" class="socialNetwork twitter"><i class="ri-twitter-fill"
            style="font-size: 1.2rem;"></i>&nbsp;Twitter</a>
    <a href="https://instagram.com/crooi.n" class="socialNetwork instagram"><i class="ri-instagram-line"
            style="font-size: 1.2rem;"></i></a>
    <a href="https://space.bilibili.com/80070601" class="socialNetwork bilibili"><i class="ri-bilibili-line"
            style="font-size: 1.2rem;"></i></a>

    
    <!-- Projects -->
    <div style="display: flex; align-items: center; padding-top: 30px; padding-bottom: 30px;">
        <div class="subTitle">Projects</div>
        <a href="https://github.com/CRooi" class="ri-arrow-right-up-line arrow"></a>
    </div>
    <div style="display: grid; grid-gap: 1rem; gap: 1rem; grid-template-columns: repeat(2,minmax(0,1fr));">
        <a href="https://projectbs.cn" class="card">
            <div style="height: 100%; display: flex; align-items: center;">
                <img src="../assets/img/ceiv2Logo.png" width="38px" />
                <div style="margin-left: 10px;">
                    CEIV2
                    <br>
                    <span style="font-size: .875rem; opacity: .5;">
                        Chinese Earthquake Information Viewer Version2
                    </span>
                </div>
            </div>
        </a>
        <a href="https://ri.projectbs.cn" class="card">
            <div style="height: 100%; display: flex; align-items: center;">
                <img src="../assets/img/riLogo.png" width="38px" />
                <div style="margin-left: 10px;">
                    Realtime Intensity
                    <br>
                    <span style="font-size: .875rem; opacity: .5;">
                        Unofficial Earthquake Monitoring Network
                    </span>
                </div>
            </div>
        </a>
        <a href="https://projectbs.cn" class="card">
            <div style="height: 100%; display: flex; align-items: center;">
                <img src="../assets/img/pbsLogo.png" width="38px" />
                <div style="margin-left: 10px;">
                    Project BS
                    <br>
                    <span style="font-size: .875rem; opacity: .5;">
                        Bousai app project
                    </span>
                </div>
            </div>
        </a>
        <a href="https://twitter.com/CrossRoadszlk" class="card">
            <div style="height: 100%; display: flex; align-items: center;">
                <img src="../assets/img/croadLogo.png" width="38px" />
                <div style="margin-left: 10px;">
                    CrossRoad™
                    <br>
                    <span style="font-size: .875rem; opacity: .5;">
                        A concept brand
                    </span>
                </div>
            </div>
        </a>
    </div>

    <!-- Posts -->
    <div style="padding-bottom: 50px;">
        <div style="display: flex; align-items: center; padding-top: 30px; padding-bottom: 30px;">
            <div class="subTitle">Latest Posts</div>
            <!-- <a href="https://github.com/CRooi" class="ri-arrow-right-up-line arrow"></a> -->
        </div>
        <div style="text-align: center;">No Data</div>
    </div>

    <div style="opacity: .5; font-size: 14px; padding-bottom: 50px;">CRooi © 2023</div>
</div>
</template>

<script lang="ts" setup>
import 'remixicon/fonts/remixicon.css'
import '../assets/css/Home.css'
</script>