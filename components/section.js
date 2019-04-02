export default (props) => (
    <div className={('compact' in props ? 'compact ' : '') + ('clean' in props ? 'clean ' : '') + ('bright' in props ? 'bright ' : '') + ('dark' in props ? 'dark noise' : '') + ('white' in props ? 'white' : '') + ' section'}>
        <div className={('wide' in props ? 'wide ' : '') + ('narrow' in props ? 'narrow' : '') + " content"}>
            { props.children }
        </div>
    </div>
)
2