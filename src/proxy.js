import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    if (!session) {
        return NextResponse.redirect(new URL('/Login', request.url))
    }
}

export const config = {
    matcher: ['/Profile', "/All_tiles/:path"],
}