---
layout: about
permalink: /publications/
title: publications
description: 
years: [2023, 2022]
nav: true
nav_order: 1
---
<style>
    .fix-dims {
        margin-left: 270px;
        margin-top: 0px
    }

    .calendar {
        border: solid 0px #777;
        border-radius: 1%;
        border-color: white;
        width: 100%; /* Ensures the iframe takes the full width of its container */
        height: 500px
    }
</style>

<div class="publications fix-dims" style="padding-left: 0px; margin-left:0; width: calc(80%)">
  <article class="content" style="width: calc(160%); padding-left:0; ">
    <h2>Publications<h2>
    {%- for year in page.years %}
      <h4 class="year">{{ year }}</h4>
      {% bibliography -f papers -q @*[year={{year}}]* %}
    {% endfor %}


