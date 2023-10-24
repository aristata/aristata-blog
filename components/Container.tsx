const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container mx-auto max-w-2xl p-10">{children}</div>
    </>
  )
}

export default Container
