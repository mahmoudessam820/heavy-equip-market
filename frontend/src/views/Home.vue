<template>

    <header>

        <!-- homepage-banner -->
        <div class="relative h-screen w-full">
            <img src="../assets/images/carousel/homepage-banner-4_v3.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter brightness-100">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <h1 class="text-4xl text-[#fec70b] font-bold">Heavy Equipment Market</h1>
                <p class="text-xl text-[#fec70b] mt-4">Increasing your reach</p>
            </div>
        </div>

    </header>

    <!-- home-categories -->
    <section id="categories">
        <div class="container relative z-40 mx-auto mt-12 mb-12 ">

            <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

                <RouterLink to="/new-equipment" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/new.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            New >
                        </p>
                    </div>
                </RouterLink>

                <RouterLink to="/used-equipment" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/used.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            Used >
                        </p>
                    </div>
                </RouterLink>

                <RouterLink to="rental-equipment-catgories" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/rental.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            Rental >
                        </p>
                    </div>
                </RouterLink>

                <RouterLink to="/part" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/parts.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            Parts >
                        </p>
                    </div>
                </RouterLink>

                <RouterLink to="/service" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/services.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            Services >
                        </p>
                    </div>
                </RouterLink>

                <RouterLink to="truck" class="block w-1/2 py-10 text-center border lg:w-1/4">
                    <div>
                        <img src="../assets/images/icons/truck.svg" class="block mx-auto sm:h-20">

                        <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                            Truck >
                        </p>
                    </div>
                </RouterLink>



            </div>

        </div>
    </section>

    <!-- most-recent-products -->
    <section id="recent-products">
        <div class="bg-[#fec70b] max-w-7xl mx-auto my-8 px-2">

            <div class="flex justify-center text-2xl md:text-3xl font-bold">
                MOST RECENT PRODUCTS
            </div>

            <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <a class="relative" href="/tool/writey-ai">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/C803039.jfif" alt="Writey A.I" loading="lazy">
                    </a>


                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/writey-ai"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>Writey A.I</span>
                            <small class="font-medium text-sm">- Most advanced language A.I</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content
                            optimization advice, and works with a plagiarism-free rule.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Content Generation,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>SEO,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Writing</span>
                            </li>
                        </ul>
                    </div>

                </li>

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <RouterLink to="/used-equipment" class="relative">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/C833061.jfif" alt="WriteMe.ai" loading="lazy">
                    </RouterLink>


                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/writemeai"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>WriteMe.ai</span>

                            <small class="font-medium text-sm">- AI Writer - Content Writing Assistant &amp; Creator</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            WriteMe.ai is your #1 AI-powered content writing assistant that crafts high-quality content at a
                            fraction of the cost. This advanced solution eliminates the need for manual writing and allows users
                            to effortlessly generate content in a few clicks.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Chatbot,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Content Generation,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>General Writing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Social Media Assistant,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Writing</span>
                            </li>
                        </ul>
                    </div>

                </li>

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <a class="relative" href="/tool/publer">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/C833219.jfif" alt="Publer" loading="lazy">
                    </a>


                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/publer"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>Publer</span>

                            <small class="font-medium text-sm">- Your Social Media Superhero</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            Publer is a robust social media management platform offering a range of features including post
                            scheduling, collaboration tools, analytics, and AI assistance to supercharge your social media
                            strategy across multiple platforms.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                            <li title="Support for API"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                                <span>API</span>
                            </li>
                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Productivity,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Social Media</span>
                            </li>
                        </ul>
                    </div>

                </li>

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <a class="relative" href="/tool/anyword">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/C833750.jfif" alt="Anyword" loading="lazy">
                    </a>


                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/anyword"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>Anyword</span>

                            <small class="font-medium text-sm">- Advanced AI Writing Built for Marketing Results</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            Anyword is an AI-powered platform trusted by marketing teams across the globe to generate, score,
                            and rank content based on predicted performance. With features like Custom Scoring AI models, Brand
                            Messaging Management, and a Performance Boost Chrome Extension, Anyword provides highly personalized
                            and effective content for every channel.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Free Trial</span>
                            </li>

                            <li title="Support for API"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                                <span>API</span>
                            </li>
                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Copywriting,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Marketing</span>
                            </li>
                        </ul>
                    </div>

                </li>

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <a class="relative" href="/tool/blogseo-ai">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/C833853.jfif" alt="BlogSEO AI" loading="lazy">
                    </a>


                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/blogseo-ai"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>BlogSEO AI</span>

                            <small class="font-medium text-sm">- AI Writer for SEO&zwj; That Follows Best Practices</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            BlogSEO AI revolutionizes SEO writing. Stay at the top of your SEO game with this automated writing
                            tool that generates high-performing blog content. It also offers keyword research, internal linking
                            strategy, schema generation, and more.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Free Trial</span>
                            </li>

                            <li title="Support for API"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                                <span>API</span>
                            </li>
                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>SEO,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Content Generation</span>
                            </li>
                        </ul>
                    </div>

                </li>

                <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                    <a class="relative" href="/tool/typewise">
                        <img class="rounded relative w-full object-cover aspect-video"
                            src="../assets/images/equipment-images/CM20130904-45250-23505.jfif" alt="Typewise" loading="lazy">
                    </a>

                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <a href="/tool/typewise"
                            class="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                            <span>Typewise</span>

                            <small class="font-medium text-sm">- AI Communication Assistant</small>
                        </a>

                        <p class="text-gray-600 two-lines">
                            Typewise is an AI Communication Assistant that helps customer service and sales teams communicate
                            faster and more effectively.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Contact for Pricing</span>
                            </li>

                            <li title="Support for API"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                                <span>API</span>
                            </li>
                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Business,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Communication,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Customer Support,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Email,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Sales</span>
                            </li>
                        </ul>
                    </div>

                </li>

            </ul>

        </div>
    </section>

    <!-- world-banner -->
    <section id="world-banner">
        <div class="relative h-screen w-full mt-5 mb-5">
            <img src="../assets/images/home/map-adrighem.png" alt="Background Image" class="absolute inset-0 w-full h-full object-cover filter brightness-100">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <h1 class="text-4xl text-white font-bold"><span class="text-[#fec70b]">PROJECTS</span> ALL OVER THE WORLD</h1>
                
            </div>
        </div>
    </section>

    <!-- expanding-youtr-range-->
    <section class="text-gray-600 body-font bg-white ">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">

            <div
                class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                    class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-black  sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    <span class="text-[#fec70b]">Expanding</span> your range
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-800">
                    You need support and solutions close to where you work. 
                    That’s why we’ve built the most extensive network of sales, rental and service representatives in the state. 
                    No matter where you work, there’s a Heavy Equipment Market location near you, and an experienced representative ready to take your call. 
                    Find your local Heavy Equipment Market representative here, and let us know how we can help you succeed.
                </p>
                <div class="flex justify-center">
                    <a href="#"
                        class="inline-flex text-black bg-[#fec70b] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                        Start Exploring
                    </a>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img class="object-cover object-center rounded" alt="hero" src="../assets/images/home/mini-map.png">
            </div>
        </div>
    </section>
    
</template>


<script>

</script>
