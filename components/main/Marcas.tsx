import { IDevToolsElement } from '@/components/sub/ToolMarcas'
import { DevTools } from '@/components/sub/ToolMarcas'

const Marcas = () => {
	const duplicatedTools = [...DevTools, ...DevTools]; 
	return (
		<div className='px-5 pt-10 pb-5'>
			<h1 className="text-[30px] text-center mb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        		Nuestras Marcas
			</h1>
			<div className='max-w-[1450px] mx-auto'>
				<div className='w-full inline-flex flex-nowrap overflow-hidden'>
					<ul
						className='flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
						{duplicatedTools.map((tool: IDevToolsElement) => {
							return (
								<li key={tool.id} className='mx-8'>
									<a href={tool.href}>
										<img
											className={`object-fill ${tool?.className}`}
											src={tool.src}
											width={tool.width}
											height={tool.height}
										/>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Marcas;
