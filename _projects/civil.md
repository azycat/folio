---
title: 'Team Civil Engineers'
date: 2022-07-24
tags: game game-jam
links:
  - anchorText: 'Visit our itch.io'
    link: 'https://cureja.itch.io/'

  - anchorText: 'View on GitHub'
    link: 'https://github.com/Civil-Engineers'
---

<div class="text-center">
  <div>
    <img
      class="mx-auto h-36 w-36 rounded-full object-cover"
      src="{{site.baseurl}}/assets/img/civil.png"
      alt="my game dev team's logo"
    />
  </div>
  <p class="pb-4 text-gray-500">We are game developers that try to be civil.</p>
</div>

{% if page.links %}

<div class="mt-8 flex flex-col sm:flex-row items-center justify-center">
{% for item in page.links %}
  <a
    href="{{ item.link }}"
    class="{% if forloop.first != true %}mt-4 sm:mt-0 {% endif %}mx-2 px-3 py-2 link-button">
    {{ item.anchorText }} &gt;
  </a>
{% endfor %}
</div>
{% endif %}
