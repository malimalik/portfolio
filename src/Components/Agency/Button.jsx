const Button = () => {
        return (

           <div class="mx-auto flex w-full max-w-lg items-center justify-center my-9">
            <div class="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
              <div class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
              <div class="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2 transform active:scale-75 transition-transform">
            <button type="button" class="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-zinc-50 placeholder:text-slate-700 focus:outline-dashed focus:ring-4 focus:ring-orange-600">Schedule a Consultation</button>
          </div>
        </div>
      </div>
    )
}

export default Button;