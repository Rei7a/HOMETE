'use strict' ;

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const result =['やるね','えらいな','いけてるやん','性格いい','やるやん',
                       'おつかれさま','いいね',"なんか今日ぶすだね!","かっこいい",'すごい']
        const n = Math.floor(Math.random() * result.length);
        btn.textContent = result[n]
        
        //以下、配列からランダムに値を取り出す公式として。
        //btn.textContent = result[Math.floor(Math.random() * result.length)];
    
    });
}