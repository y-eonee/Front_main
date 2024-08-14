import React from 'react';
import { Html } from '@react-three/drei';
import styles from './Ranking.module.css'; // CSS 모듈 import

const rankingData = [
    { rank: 1, name: 'Player One', score: 1000 },
    { rank: 2, name: 'Player Two', score: 950 },
    { rank: 3, name: 'Player Three', score: 900 },
    { rank: 4, name: 'Player Four', score: 850 },
    { rank: 5, name: 'Player Five', score: 800 },
];

export default function Ranking() {
    return (
        <Html center>
            <div className={styles['ranking-container']}>
                <h1>Ranking</h1>
                <ul className={styles['ranking-list']}>
                    {rankingData.map((entry) => (
                        <li key={entry.rank} className={styles['ranking-item']}>
                            <span className={styles['rank']}>{entry.rank}</span>
                            <span className={styles['name']}>{entry.name}</span>
                            <span className={styles['score']}>{entry.score}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Html>
    );
}
