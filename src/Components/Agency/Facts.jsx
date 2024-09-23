import React from "react";

const Facts = () => {
    return (   
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            <div class="flex flex-col">
                <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
            </div>
            <div class="flex flex-col">
                <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
            </div>
            <div class="flex flex-col">
                <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
            </div>
        </dl>
    </div>
    )
}

export default Facts;