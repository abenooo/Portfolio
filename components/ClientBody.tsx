
// Create a separate client component
'use client'
const ClientBody = ({ 
  children,
  className 
}: { 
  children: React.ReactNode
  className: string 
}) => {
  return <body className={className}>{children}</body>
}