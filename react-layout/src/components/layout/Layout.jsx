import React from 'react'

function Layout({ children }) {
    return (
        <>
            <div className='min-h-screen bg-red-100 flex flex-col'>
                <div className='w-full h-[100px] bg-orange-300 p-10 '>
                    <h1>Header</h1>
                </div>
                <main className='p-10'>
                    {children}
                </main>
                <div className='w-full h-[100px] bg-green-300 bottom-0 absolute p-10'>
                    <h1>Footer</h1>
                </div>
            </div>
        </>
    )
}

export default Layout;
