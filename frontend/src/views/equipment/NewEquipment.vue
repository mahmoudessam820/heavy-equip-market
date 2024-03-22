<template>

    <!-- inner-banner-text -->
    <section id="inner-banner-text" class="bg-gray-900">
        <div class="relative lg:flex items-center space-y-16 max-w-7xl mx-auto px-8 py-24 lg:space-y-0 lg:space-x-16">
            <div class="flex-grow space-y-8">
                <div class="space-y-4">

                    <h2 class="text-white font-bold text-yellow-200 text-4xl">
                        New Equipment 
                    </h2>

                    <p class="text-xl leading-relaxed text-white">
                        We are proud to offer a full product line of Cat® equipment designed to help you get the job done. 
                        From dozers and excavators to pavers and loaders, we’re your go-to option for all the new and used Cat equipment you need.
                    </p>
                </div>

                <a href="#" target="_blank"
                    class="group inline-flex items-center justify-center px-6 text-lg sm:text-xl font-semibold tracking-tight text-white transition rounded-lg h-11 ring-2 ring-inset ring-white hover:bg-yellow-200 hover:text-yellow-800 hover:ring-yellow-200 focus:ring-yellow-200 focus:text-yellow-800 focus:bg-yellow-200 focus:outline-none">
                    Learn More About Our Equipment Now
                </a>
            </div>
        </div>
    </section>

    <!-- new-equipment -->
    <section id="new-equipment">
        <div class="mx-auto p-5 sm:p-10 md:p-16">
            <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                <div class="rounded overflow-hidden shadow-lg">
                    <div class="relative">
                        <RouterLink to="/new-equipment-family">
                            <div class="h-48"> 
                                <img class="w-full h-full object-cover" src="@/assets/images/new-equipment/wheel-loaders.jpg.webp " alt="wheel-loaders">
                            </div>
                            <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </RouterLink>
                    </div>
                    <div class="px-6 py-4">
                        <RouterLink to="/new-equipment-family" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Wheel Loaders</RouterLink>
                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg">
                    <a href="#"></a>
                    <div class="relative">
                        <a href="#">
                            <div class="h-48"> 
                                <img class="w-full h-full object-cover" src="@/assets/images/new-equipment/Asphalt Pavers.jpg" alt="Asphalt Pavers">
                            </div>
                            <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                    </div>
                    <div class="px-6 py-4">
                        <a href="#" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Asphalt Pavers</a>
                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg">

                    <a href="#"></a>
                    <div class="relative">
                        <a href="#">
                            <div class="h-48">
                                <img class="w-full h-full object-cover" src="@/assets/images/new-equipment/Backhoe Loaders.jfif" alt="Backhoe Loaders">
                            </div>

                            <div
                                class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </a>

                    </div>
                    <div class="px-6 py-4">

                        <a href="#"
                            class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Backhoe Loaders</a>
                    </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <div class="h-48">
                            <img class="w-full h-full object-cover"
                                src="@/assets/images/new-equipment/Cold Planers.jfif"
                                alt="Cold Planers">
                        </div>
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>

                </div>
                <div class="px-6 py-4">

                    <a href="#"
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Cold Planers</a>
                </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <div class="h-48">

                            <img class="w-full h-full object-cover"
                                src="@/assets/images/new-equipment/Compact Track Loaders.jpg"
                                alt="Compact Track Loaders">
                        </div>
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>

                </div>
                <div class="px-6 py-4">

                    <a href="#"
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Compact Track Loaders</a>
                </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <div class="h-48">

                            <img class="w-full h-full object-cover"
                                src="@/assets/images/new-equipment/Dozers.jfif"
                                alt="Dozers">
                        </div>
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>

    
                </div>
                <div class="px-6 py-4">

                    <a href="#"
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Dozers</a>
                </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <div class="h-48">

                            <img class="w-full h-full object-cover"
                                src="@/assets/images/new-equipment/Excavators.jfif"
                                alt="Excavators">
                        </div>
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>

                </div>
                <div class="px-6 py-4">

                    <a href="#"
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Excavators</a>
                </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <div class="h-48">
                            
                            <img class="w-full h-full object-cover"
                                src="@/assets/images/new-equipment/Forestry Machines.jpg"
                                alt="Forestry Machines">
                        </div>
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>


                </div>
                <div class="px-6 py-4">

                    <a href="#"
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Forestry Machines</a>
                </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">

                    <a href="#"></a>
                    <div class="relative">
                        <a href="#">
                            <div class="h-48">

                                <img class="w-full h-full object-cover"
                                    src="@/assets/images/new-equipment/Motor Graders.jfif"
                                    alt="Motor Graders">
                            </div>
                            <div
                                class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </a>

                    </div>
                    <div class="px-6 py-4">

                        <a href="#"
                            class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Motor Graders</a>
                    </div>


                </div>

                <div class="rounded overflow-hidden shadow-lg">
                    <div class="relative">
                        <RouterLink to="/new-machine-family">
                            <div class="h-48"> 
                                <img class="w-full h-full object-cover" src="@/assets/images/new-equipment/Articulated Trucks.jfif" alt="Articulated Trucks">
                            </div>
                            <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </RouterLink>
                    </div>
                    <div class="px-6 py-4">
                        <RouterLink to="/new-machine-family" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Articulated Trucks</RouterLink>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>

<script setup>
</script>
