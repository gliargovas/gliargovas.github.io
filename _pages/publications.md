---
layout: about
permalink: /publications/
title: publications
description: Publications by Georgios Liargkovas spanning machine learning for systems, operating systems, scheduling, and shell systems.
years: [2026, 2025, 2023, 2022]
nav: true
nav_order: 1
---


<div class="publications publications-page">
  <h2>Publications</h2>
  {%- for year in page.years %}
    <h4 class="year">{{ year }}</h4>
    {% bibliography -f papers -q @*[year={{year}}]* %}
  {% endfor %}
</div>

