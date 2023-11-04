---
layout: page
title: /projects/
permalink: projects
---

<div>
  {% assign projects = site.projects | sort: 'date' | reverse %}
  {% for project in projects %}
    <div class="py-1">
      <h3><a href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a>
        </h3>
      <div class="text-sm text-gray-400">{{project.date | date: "%B %-d, %Y"}}

    {% if page.tags.size !=0 %}
      <i class="text-xs fas fa-tags"></i>
    {% for tag in project.tags %}
      <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
        <a class="!no-underline" href="{{site.baseurl}}/tag#{{ tag }}">{{ tag }}</a>
      </div>
    {% endfor %}
    {% endif %}
    </div>
    </div>

{% endfor %}

</div>
