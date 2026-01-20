---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Dev Hytale"
  text: ""
  tagline: Modding library and resources for Hytale!
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/timothywashburn.png',
    name: 'Timothy',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/timothywashburn' }
    ]
  }
]
</script>

## About this site

Hello, I'm Timothy! As long as this introduction page exists, you can assume this is mostly a solo project (although I'd love to involve the larger community if people actually find this useful). I'm not exactly sure what I'm making here, the plan is to just start documenting the things I learn and then go from there.

### Why this site could be useful to you

There are definitely a lot of sites out there pumping out documentation and guides, and they definitely have their use case (I'm using them myself to learn about modding Hytale). This site is somewhat on the other end of the spectrum, where I'll be producing a lot less content and trying to make sure that content is helpful. I can't guarantee it will be helpful to everyone, but the idea is that if I found it helpful, maybe you will too.

## Team

<VPTeamMembers size="small" :members="members" />