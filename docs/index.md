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

## Team

<VPTeamMembers size="small" :members="members" />