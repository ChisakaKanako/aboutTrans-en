---
title: About
next: false
lastUpdated: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: '/profile.png',
    name: 'Kanako',
    title: 'Creator'
  }
]
</script>
<VPTeamMembers size="medium" :members="members" />
