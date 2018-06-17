export default (props) => (
    <div className={('compact' in props ? 'compact ' : '') + ('clean' in props ? 'clean ' : '') + ('bright' in props ? 'bright ' : '') + ' section'}>
        <div className={('wide' in props ? 'wide ' : '') + ('narrow' in props ? 'narrow' : '') + " content"}>
            { props.children }
        </div>
    </div>
)
2