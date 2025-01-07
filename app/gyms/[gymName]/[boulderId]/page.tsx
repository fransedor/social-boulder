"use client"

import { mockProblems } from "@/mocks/boulder";
import React, { useState } from "react";
import { Calendar, User, Tag, CheckCircle, MessageSquare, Send, Trophy } from "lucide-react";

const Page = () => {
  const boulderProblem = mockProblems[0];
  const [isSent, setIsSent] = useState(false);
  const [newComment, setNewComment] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Image Column */}
          <div className="relative h-[500px] lg:h-screen lg:sticky lg:top-0">
            <img
              src={boulderProblem.imageUrl}
              alt={boulderProblem.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="p-8 lg:p-16 lg:overflow-auto">
            <div className="max-w-xl">
              <div className="flex items-center justify-between mb-6">
                {boulderProblem.status === "active" && (
                  <div className="inline-flex items-center gap-1.5 text-sm text-emerald-600">
                    <CheckCircle size={16} />
                    <span>Active Problem</span>
                  </div>
                )}

                <button
                  onClick={() => setIsSent(!isSent)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    isSent
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {isSent ? <Trophy size={18} /> : <Send size={18} />}
                  {isSent ? "Sent!" : "Mark as Sent"}
                </button>
              </div>

              <div className="space-y-2 mb-8">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                  {boulderProblem.name}
                </h1>
                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">
                  {boulderProblem.grade}
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {boulderProblem.description}
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-3">
                  <User className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Setter</p>
                    <p className="text-gray-900">{boulderProblem.setter}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Date Set</p>
                    <p className="text-gray-900">
                      {new Date(boulderProblem.dateSet).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-12">
                <Tag className="text-gray-400 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500 mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {boulderProblem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t pt-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare size={20} className="text-gray-400" />
                  <h2 className="text-lg font-medium text-gray-900">Comments</h2>
                </div>

                <div className="space-y-6 mb-8">
                  {boulderProblem.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-900">{comment.user}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    onClick={() => {
                      if (newComment.trim()) {
                        // Add comment logic here
                        setNewComment("");
                      }
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
