export default (props) => (
    <div className={('compact' in props ? 'compact ' : '') + ('clean' in props ? 'clean ' : '') + ('bright' in props ? 'bright ' : '') + ' section'}>
        <div className={('wide' in props ? 'wide ' : '') + "content"}>
            { props.children }
        </div>
        <style jsx>{`    
        `}
        </style>
    </div>
)
2