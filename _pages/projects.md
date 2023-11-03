---
layout: page
title: my projects
permalink: projects
---

<div>
  {% for post in site.posts %}
    <div class="py-1">
      <h3><a href="{{site.baseurl}}{{ post.url }}">{{ post.title}}</a>
        </h3>
      <div class="text-sm text-gray-400">{{post.date | date: "%B %-d, %Y"}}

    {% if page.tags.size !=0 %}
      <i class="text-xs fas fa-tags"></i>
    {% for tag in post.tags %}
      <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
        <a class="!no-underline" href="{{site.baseurl}}/tag#{{ tag }}">{{ tag }}</a>
      </div>
    {% endfor %}
    {% endif %}
    </div>
    </div>
  {% endfor %}
</div>


