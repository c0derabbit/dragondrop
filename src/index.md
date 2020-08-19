---
layout: base.11ty.js
---

{% for album in albums %}
  <a href="{{ album.slug }}">{{ album.title }}</a>
{% endfor %}
