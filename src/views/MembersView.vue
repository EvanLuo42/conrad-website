<script setup lang="ts">
import MemberCard from '@/components/MemberCard.vue';
</script>

<template>
  <main>
    <h1 class="title">Team Members</h1>
    <MemberCard class="member" src="/zjs.jpg" name="ABC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></MemberCard>
    <MemberCard class="member" src="/llc.jpg" name="Lichen Lu Edward" description="I am Lu Lichen Edward, from the Grade 11th of Shanghai Pinghe School. Due to my great enthusiasm and interest in business, I hope to gain more experience and multi-dimensional knowledge in the field of business through this Conrad activity, filling some gaps in my previous field. In the process of writing this business plan, my main responsibility was for the &quot;Go to Market&quot;, &quot;Business Model&quot; and &quot;Fundraising&quot; part in this Conrad activity, which includes product pricing, funding sources, marketing strategies, and other content."></MemberCard>
    <MemberCard class="member" src="/ywq.jpg" name="Wenqing Yang Eloisa" description="I am Eloisa Yang Wenqing from the senior second grade at Shanghai Pinghe School. Participating in Conrad is my first experience in a science-related competition, where I was responsible for business analysis and planning within the team. Throughout the process, I applied knowledge related to marketing to assess the feasibility of our project. Through our team's efforts, we planned the launch and future strategy for a new product called Neurolingo, offering a viable path for the commercialization of the BCI industry and providing solutions to human language difficulties."></MemberCard>
    <MemberCard class="member" src="/lzy.jpg" name="Ziyun Luo Evan" description="I am Evan Luo Ziyun from grade 11 at Shanghai Pinghe School. I'm familiar with full-stack development, sophisticated in Java, Kotlin, Rust, Swift, Vue.js and other popular languages. I also have a 4-year development experience, mainly game development and backend development. In Conrad, I am mainly responsible for the website developing job."></MemberCard>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
}

.member {
  margin-top: 50px;
}
</style>