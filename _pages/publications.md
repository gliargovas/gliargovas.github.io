---
layout: about
permalink: /publications/
title: publications
description: 
years: [2025, 2023, 2022]
nav: true
nav_order: 1
---


<div class="publications" style="padding-left: 20px; margin-left:0; width: calc(50%)">
  <article class="content" style="width: calc(250%); padding-left:0; ">
    <h2>Publications<h2>
    {%- for year in page.years %}
      <h4 class="year">{{ year }}</h4>
      {% bibliography -f papers -q @*[year={{year}}]* %}
    {% endfor %}


