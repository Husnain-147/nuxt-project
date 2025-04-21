<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section
      class="relative h-screen bg-cover bg-center"
      style="
        background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
      "
    >
      <div class="absolute inset-0 bg-black bg-opacity-60" />
      <div
        class="relative flex flex-col items-center justify-center h-full px-4 text-center text-white"
      >
        <h1 class="mb-2 text-5xl font-bold md:text-6xl">Savory Delights</h1>
        <p class="mb-8 text-xl md:text-2xl">Experience culinary excellence since 1995</p>
        <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <button
            class="px-8 py-3 text-lg font-semibold text-white transition-all bg-amber-600 rounded-lg hover:bg-amber-700"
          >
            Reserve a Table
          </button>
          <button
            class="px-8 py-3 text-lg font-semibold text-white transition-all bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-gray-900"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-14">
          <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Why Choose Us</h2>
          <div class="w-20 h-1 mx-auto bg-amber-500" />
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="p-8 text-center rounded-lg shadow-lg">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-amber-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Fresh Ingredients</h3>
            <p class="text-gray-600">
              We source only the freshest, highest quality ingredients from local farms and
              suppliers.
            </p>
          </div>
          <div class="p-8 text-center rounded-lg shadow-lg">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-amber-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Expert Chefs</h3>
            <p class="text-gray-600">
              Our world-class culinary team crafts each dish with passion and attention to detail.
            </p>
          </div>
          <div class="p-8 text-center rounded-lg shadow-lg">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-amber-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Unique Atmosphere</h3>
            <p class="text-gray-600">
              Enjoy a cozy and elegant ambiance designed to enhance your dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Highlights Section -->
    <section class="py-16 bg-gray-100">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-14">
          <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Our Signature Dishes</h2>
          <div class="w-20 h-1 mx-auto bg-amber-500" />
          <p class="mt-4 text-gray-600">Explore our chef's most celebrated creations</p>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <!-- Menu Item 1 -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img
              class="object-cover w-full h-64"
              src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Ribeye Steak"
            />
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-800">Ribeye Steak</h3>
                <span class="font-semibold text-amber-600">$34.99</span>
              </div>
              <p class="text-gray-600">
                Perfectly aged ribeye steak grilled to your liking, served with roasted vegetables
                and truffle mashed potatoes.
              </p>
            </div>
          </div>

          <!-- Menu Item 2 -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img
              class="object-cover w-full h-64"
              src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Seafood Pasta"
            />
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-800">Seafood Pasta</h3>
                <span class="font-semibold text-amber-600">$28.99</span>
              </div>
              <p class="text-gray-600">
                Fresh linguine tossed with a medley of seafood in a light white wine and garlic
                sauce.
              </p>
            </div>
          </div>

          <!-- Menu Item 3 -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img
              class="object-cover w-full h-64"
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1757&q=80"
              alt="Chocolate Lava Cake"
            />
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-800">Chocolate Lava Cake</h3>
                <span class="font-semibold text-amber-600">$12.99</span>
              </div>
              <p class="text-gray-600">
                Decadent chocolate cake with a molten center, served with vanilla bean ice cream and
                fresh berries.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <button
            class="px-8 py-3 text-lg font-semibold text-white transition-all bg-amber-600 rounded-lg hover:bg-amber-700"
          >
            Full Menu
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center md:flex-row md:space-x-10">
          <div class="w-full mb-10 md:w-1/2 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Restaurant Interior"
              class="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Our Story</h2>
            <div class="w-20 h-1 mb-6 bg-amber-500" />
            <p class="mb-6 text-gray-600">
              Founded in 1995, Savory Delights began as a small family restaurant with a passion for
              authentic flavors and exceptional dining experiences. Over the decades, we've grown
              into a culinary destination while staying true to our roots.
            </p>
            <p class="mb-8 text-gray-600">
              Our philosophy is simple: use the finest ingredients, prepare them with care, and
              serve them with love. We believe that great food brings people together, and we're
              committed to creating memorable moments for every guest who walks through our doors.
            </p>
            <button
              class="px-8 py-3 text-lg font-semibold text-white transition-all bg-amber-600 rounded-lg hover:bg-amber-700"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-100">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-14">
          <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">What Our Guests Say</h2>
          <div class="w-20 h-1 mx-auto bg-amber-500" />
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Testimonial 1 -->
          <div class="p-8 bg-white rounded-lg shadow-lg">
            <div class="flex items-center mb-4 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="mb-4 italic text-gray-600">
              "The best dining experience I've had in years. The food was exceptional and the
              service was impeccable. I highly recommend the ribeye steak!"
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 mr-4 rounded-full"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Customer"
              />
              <div>
                <h4 class="font-semibold text-gray-800">Emily Johnson</h4>
                <p class="text-sm text-gray-500">Food Critic</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="p-8 bg-white rounded-lg shadow-lg">
            <div class="flex items-center mb-4 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="mb-4 italic text-gray-600">
              "We celebrated our anniversary here and it was perfect. The attention to detail and
              personalized service made us feel special. The seafood pasta is a must-try!"
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 mr-4 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Customer"
              />
              <div>
                <h4 class="font-semibold text-gray-800">Michael Chen</h4>
                <p class="text-sm text-gray-500">Regular Guest</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="p-8 bg-white rounded-lg shadow-lg">
            <div class="flex items-center mb-4 text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="mb-4 italic text-gray-600">
              "As a vegetarian, I often struggle to find good options at upscale restaurants. But
              Savory Delights exceeded my expectations with their creative plant-based dishes. Can't
              wait to return!"
            </p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 mr-4 rounded-full"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer"
              />
              <div>
                <h4 class="font-semibold text-gray-800">Sarah Martinez</h4>
                <p class="text-sm text-gray-500">Food Blogger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact and Reservation Section -->
    <section class="py-16 bg-white">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col items-center lg:flex-row lg:space-x-10">
          <div class="w-full mb-10 lg:w-1/2 lg:mb-0">
            <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Make a Reservation</h2>
            <div class="w-20 h-1 mb-6 bg-amber-500" />
            <p class="mb-8 text-gray-600">
              Reserve your table online or call us directly at (555) 123-4567. We recommend booking
              at least 48 hours in advance for weekends.
            </p>

            <form class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-700"
                    >Full Name</label
                  >
                  <input
                    id="name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-700"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-700"
                    >Date</label
                  >
                  <input
                    id="date"
                    type="date"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label for="time" class="block mb-2 text-sm font-medium text-gray-700"
                    >Time</label
                  >
                  <input
                    id="time"
                    type="time"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div>
                <label for="guests" class="block mb-2 text-sm font-medium text-gray-700"
                  >Number of Guests</label
                >
                <select
                  id="guests"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6+">6+ People</option>
                </select>
              </div>
              <div>
                <label for="special" class="block mb-2 text-sm font-medium text-gray-700"
                  >Special Requests</label
                >
                <textarea
                  id="special"
                  rows="3"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                class="w-full px-8 py-3 text-lg font-semibold text-white transition-all bg-amber-600 rounded-lg hover:bg-amber-700"
              >
                Reserve Now
              </button>
            </form>
          </div>

          <div class="w-full lg:w-1/2">
            <div class="h-96 rounded-lg shadow-lg">
              <!-- Replace the src with an actual Google Maps embed for your restaurant -->
              <iframe
                class="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215277303967!2d-73.98777242397171!3d40.7580204713328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f87ddf7eab%3A0x8d23d5e3cbf761!2sRestaurant%20Row%2C%20W%2046th%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                loading="lazy"
              />
            </div>

            <div class="mt-8 space-y-4">
              <div class="flex items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 text-white bg-amber-500 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-800">Location</h4>
                  <p class="text-gray-600">123 Culinary Avenue, Gourmet City, GC 12345</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 text-white bg-amber-500 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-800">Contact</h4>
                  <p class="text-gray-600">Phone: (555) 123-4567</p>
                  <p class="text-gray-600">Email: info@savorydelights.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 text-white bg-amber-500 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold text-gray-800">Hours</h4>
                  <p class="text-gray-600">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p class="text-gray-600">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p class="text-gray-600">Sunday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 text-white bg-gray-900">
      <div class="container px-4 mx-auto">
        <div class="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
          <div>
            <h3 class="mb-4 text-xl font-bold">Savory Delights</h3>
            <p class="mb-4 text-gray-400">
              Experience the art of fine dining in a cozy, elegant atmosphere.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Home</a></li>
              <li><a href="#" class="hover:text-white">Menu</a></li>
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Reservations</a></li>
              <li><a href="#" class="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Our Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">Private Dining</a>
              </li>
              <li>
                <a href="#" class="hover:text-white">Events & Catering</a>
              </li>
              <li><a href="#" class="hover:text-white">Gift Cards</a></li>
              <li><a href="#" class="hover:text-white">Cooking Classes</a></li>
              <li><a href="#" class="hover:text-white">Chef's Table</a></li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-semibold">Newsletter</h3>
            <p class="mb-4 text-gray-400">
              Subscribe to receive updates on special events and exclusive offers.
            </p>
            <form class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="w-full px-3 py-2 text-gray-800 bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                class="px-4 py-2 text-white bg-amber-600 rounded-r-md hover:bg-amber-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 Savory Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
