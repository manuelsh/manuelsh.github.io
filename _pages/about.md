---
layout: about
title: about
permalink: /
subtitle: When digression becomes the path

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Barcelona, Spain</p>
news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

Find here some of my writtings and projects.

## selected projects

{% assign selected_projects = site.projects | where: "selected", true | sort: "order" %}
{% for project in selected_projects %}
{% if project.order %}

- **[{{ project.title }}]({{ project.link }})**  
   {{ project.description }}
  {% endif %}
  {% endfor %}
