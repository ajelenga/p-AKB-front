import React from "react";

export default function Example() {
    return (
            <div classNames="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div classNames="rounded overflow-hidden shadow-lg">
            <img classNames="w-full" src="/mountain.jpg" alt="Mountain"/>
            <div classNames="px-6 py-4">
                <div classNames="font-bold text-xl mb-2">Mountain</div>
                <p classNames="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div classNames="px-6 pt-4 pb-2">
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            </div>
            <div classNames="rounded overflow-hidden shadow-lg">
            <img classNames="w-full" src="/river.jpg" alt="River"/>
            <div classNames="px-6 py-4">
                <div classNames="font-bold text-xl mb-2">River</div>
                <p classNames="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div classNames="px-6 pt-4 pb-2">
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
            </div>
            </div>

            <div classNames="rounded overflow-hidden shadow-lg">
            <img classNames="w-full" src="/forest.jpg" alt="Forest"/>
            <div classNames="px-6 py-4">
                <div classNames="font-bold text-xl mb-2">Forest</div>
                <p classNames="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div classNames="px-6 pt-4 pb-2">
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span classNames="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
            </div>
        </div>
    );
}