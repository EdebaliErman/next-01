import React from 'react'
import style from './style.module.css'
import Link from 'next/link'
function Categories({ categories }) {
    return <div className={style.categories}>
        {categories.map(category =>
            <Link
                key={category.id}
                className={style.category}
                href={`/${category.id}`}>
                <div className={style.name}>{category.name}</div>
            </Link>)}
    </div>
}

export default Categories
