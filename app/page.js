"use client";

import Image from "next/image";
import { useChat } from "ai/react";

export default function Home() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } =
    useChat();

  const noMessages = !messages || messages.length === 0;

  console.log(messages);

  return (
    <main>
      <Image
        layout="fill"
        src="/bg.png"
        alt="chatbot banner"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute px-4 w-full h-screen flex flex-col gap-5 items-center bottom-5">
        <h1 className="text-4xl share-tech-regular md:text-5xl font-bold mt-10 text-white ">
          Aryan Dalvi's Chatbot
        </h1>
        <section className="w-full flex flex-1 flex-col overflow-y-scroll">
          {noMessages ? (
            <p className="text-center text-xl">Ask Me Anything</p>
          ) : (
            <>
              {messages.map((message, index) => {
                return (
                  <div
                    className={`rounded-3xl ${
                      message.role === "user"
                        ? "rounded-br-none bg-[#12f7ff] ml-auto text-[#121111]"
                        : "rounded-bl-none bg-[#292e33] text-gray-200"
                    } m-2 p-2 px-4 w-[70%] md:w-[80%] mt-4 `}
                    key={`message-${index}`}
                  >
                    <b>{message.role === "user" ? "User:" : "Aryan:"} </b>
                    {message.content}
                  </div>
                );
              })}

              {isLoading && <span className="ml-auto">Thinking...</span>}
            </>
          )}
        </section>

        <form
          className="w-full flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Tell me about your projects!"
            onChange={handleInputChange}
            type="text"
            value={input}
            className="py-3 px-5 flex-1 rounded text-gray-200 text-2xl border-2 border-gray-50 focus:outline-none focus:border-[#12f7ff] bg-[#292e33] "
          />
          <button
            type="submit"
            className="bg-[#12f7ff] hover:bg-blue-400 text-black rounded text-xl px-5 cursor-pointer focus:outline-none disabled:bg-[#12f7ff]"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
