const HeadingPill = ({children}) => {
  return (
    <div className="flex justify-center">
        <div className="px-5 py-2 rounded-full border border-neutral-500 mb-5 text-neutral-200 bg-neutral-800">
            {children}
        </div>
    </div>
  )
}

export default HeadingPill