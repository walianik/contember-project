import { Link, LogoutLink } from '@contember/admin'
import * as React from 'react'
import { useDirectives } from './Directives'
import { Layouts, LayoutType } from './Layouts'
import { Slots } from './Slots'
import { useDocumentTitle } from './useDocumentTitle.temporary'
import { Navigation } from './Navigation'
const layout = 'default' as LayoutType
const LayoutComponent = Layouts[layout] ?? Layouts.default

export const Layout = (props: React.PropsWithChildren) => {
	const directives = useDirectives()
	useDocumentTitle(directives.title)
	return (
		<>
			<Slots.Title>
				<h1 className='bg-blue-300 p-5 text-white'>{directives.title}</h1>
			</Slots.Title>
			<Slots.Logo >
				<Link to="index"><span className='bg-indigo-300 w-72 flex p-5 text-white'>OrienteerHub</span></Link>
			</Slots.Logo>
			<Slots.Profile>
				<LogoutLink>Logout</LogoutLink>
			</Slots.Profile>

			<Slots.Navigation >
			<div className='bg-pink-300 text-white'>
				<Navigation />
			</div>
			</Slots.Navigation>
			<LayoutComponent>
				{props.children}
			</LayoutComponent>
		</>
	)
}
