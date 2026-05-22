export default function Accordion({title, children}:{title:string; children:React.ReactNode}){
  return (
    <details className="border-b py-4">
      <summary className="cursor-pointer font-medium">{title}</summary>
      <div className="mt-3 text-sm text-gray-700">{children}</div>
    </details>
  )
}
