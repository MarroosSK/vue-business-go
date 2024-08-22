<script setup lang="ts"></script>

<template>
  <main>
    <div className=" container flex flex-col min-h-screen items-center justify-center">
      <div className="z-[1] flex flex-col items-center justify-center">
        <div className="relative">
          <h1
            className=" text-[#15256b] text-center text-[3.2rem] md:text-[4.5rem] font-extrabold m-0 leading-[4rem]"
          >
            Connect with great
          </h1>
          <h1
            className=" text-[#15256b] text-center  text-[3.2rem] md:text-[4.5rem] font-extrabold  m-0 leading-[4rem]"
          >
            <span className="text-[#31e4ff] ">local</span> businesses
          </h1>
        </div>

        <p className=" text-[#15256b] mt-12 font-normal text-sm md:text-lg">
          Restaurants, Dentists, Bars, Beauty Salons, Doctors, ...
        </p>

        <div className="flex items-center justify-center mt-16">
          <RouterLink
            to="/business"
            className="bg-[#15256b] hover:bg-[#15256b]/75 p-2 text-[#31e4ff] rounded-md"
            >Find Business</RouterLink
          >

          <div className="h-[46px]  border-l-[#31e4ff] border-l-4 mx-4"></div>

          <div className=" text-[#15256b] font-normal text-sm md:text-lg">
            <span>6.321 million places.</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
