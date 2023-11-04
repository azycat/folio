---
layout: page
title: /projects/
permalink: projects
---

```


                                             |\__/,|   (`\
                                           _.|o o  |_   ) )
    my projects                        ---(((---(((---------
```

<div class="projects grid grid-flow-row grid-cols-1 sm:grid-cols-2">
  {% for project in site.data.projects %}
    {% include project.html %}
  {% endfor %}
</div>
