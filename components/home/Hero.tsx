import React from "react";

export function Hero() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80&w=1000"
          alt="Climbing background"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Next Climbing Adventure
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          {
            "Discover the best bouldering gyms near you. Whether you're a beginner or an expert, find the perfect spot to challenge yourself and join the climbing community."
          }
        </p>
      </div>
    </div>
  );
}
