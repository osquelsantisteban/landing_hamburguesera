import React from 'react';

export default function Section4() {
    return (
        <section className='relative mb-32 lg:mb-4'>
            <div className='w-[706px]'>
                <h2 className='w-64 text-2xl lg:text-5xl mb-14 h-14 lg:w-auto lg:h-auto text-red-strong'>¿Qué es lo diferente?</h2>
            </div>

            <div className='relative flex flex-col gap-32 lg:grid lg:items-center lg:grid-cols-4 lg:gap-0'>
                <div className='relative flex flex-row h-36 lg:h-36 lg:col-span-2 lg:col-start-3 lg:my-28'>
                    <div className='flex w-[48px] h-[64px] lg:w-[100px] lg:h-[137px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="1861.5 3075.333 101 137.017"><image xlinkHref="data:image/png;base64,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" dataname="1" transform="translate(1862.5 3076.344)"/></svg>
                    </div>

                    <p className='absolute top-5 left-8 w-[245px] lg:top-11 lg:left-16 lg:w-[417px] text-base lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>

                <div className='relative flex flex-row-reverse h-36 lg:h-36 lg:col-span-2 lg:col-start-1 lg:my-28 lg:justify-self-end'>
                    <div className='flex w-[48px] h-[64px] lg:w-[100px] lg:h-[137px]'>                        
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="1847.5 3401.333 101 137.017"><image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAACJCAYAAAA1+vY2AAAZpUlEQVR4Xu1dC5xTxfWemZtsFgEREQTro/LcZHdB/4DsbrLotlAsaikFspugqPVVrZY+tNXWqthiW23ro1r/Yi1KZbMJ4KNa67MrbJIFiw9gkyz4QItWFKwC8trkzvS7d82yxWVzcx/ZTfD+fvwEM3Nm5nx37syc+c45lPTS552mJ4fvlXbVyELUUEJrhCDHZd9VFhdCXi9JbB2RbK86J81+JnsZua9Bc99k1y0KESpqicgzJUbOIABCCDqmc0nGmOCCbyNcbAdI2wQh2yjDfynfxgjtj38P4JwexQQZIBgfxCgdyzlhnWVQQbYTSh+32aXHRk+a82RvGfvB/ehxUF5ZFRrssKWuJILhjzg63UFKyUeCkkYhsxcdgjaOmuyNZ6NEEQpJiRP4OMbJOE74OCHYGYSIcQfk0x0A8oFiB7tzxATvv7KRbXXZHgPlX2sfHbFnX9uVMiFXEsJtykCpoC9wJp6zU6lxTJX3JbMHn4g+XE5l+wzMpBlckAmdALq3WLA7h3u8G81uU4+8nIPy+qqQq80uriYyvzDdYXx+HqHEfneJZ1ajnkHoqfNmePmE/TQ5H2vVuR31BV00hB5/9WCPZ5cemWbVySkoiWjDZVyIPxBB7OoAKH2QOsgfXBPqXjFrQNnKiUcayvB5m49ZerFSFyC9i9XrGtfkuQ3ZyjKrfE5A2RINHb2T8z9gyP40GI42tnBkjfcNswZiVE4iGirnRNxGOJ+mvi+M/qVItF090j3vQ6Oys61vOSjrVwW/KTFxFwA5ATNkt8ToVSXuusXZdjRX5WOR4Pewxv1Wmc0A5u2UxPxjJ3mbc9W++kJY2Visqf53+ET9sL0h+vd+xY6rTpww800r2zRD9hvR0Mg2zu8SRHwdHU8yye5zVsxeYYZsLTIsAyUWaViMD/QFSidwxPips8r/Ky0d6k1lWiPB+2XB1bUG37P5pe5azHjrH0tAiUcCD2DB/LbyubKzoumj3bNWWT8Ua1qIResXEE5vUKQLwn5Y5qm93ZqWDkg1HZREU2ARp+QSnKj3YkdzVomnNmfbXKuUFW9qWCKoOK991pO5zipfvVVtmb6mxKOBewUn38E60kbsYnrpab4XrOx8LmW3RkI/k4X8S7XNIjLFyrGZNlNamurvoZRegXcpVWRjZ42qmPNsLpWWi7awTt6FdfIqyshHSZ5yj/OcZ4kFwBRQEs2hH3JZ/h1AgYlJOqu0cs7fc6GknmgDh80GIUQtbHN/c7l9Z1vRB8OgxKLLTyU8qZ7IJSrNKXF7l1vR0d4i8901Dw3akXS0YNkfyiTxPWelH4dicx/DoMQjwZVC8MmYJfe63HX4fBX+k4gG/LgWWKqcYZI2R9kpk761ycxRGwIl1hS4CR27EV+tjc73bGOp19tmZud6s6yWcP1DOBDPw73Pk2XVdeeY2VfdoGyKrJicFG0r1c8WE18vqfI/bWbHerustY1PHNPH/qkyQwYSSZ5eWnmuaeuoblCw/X0F299TKWW3uty1P+ntSrSif7Fw4KeQuxA2shdcVXVTzGpDFyjxaP2tgtNrGCVrnW7fRLM6k29ylCvseFTegqP+EIlIM0o83r+aMYasQXl3zSODdqTa/o39epHEizwlk2dFzOhIvspoDYeukYl8K2Vslauq9nQzxpE1KC3NgV9QmVyPE8ljrmr/TD2diEZDfQYxMh4HsBNs1HaUEKmjcF8+EJ35mAq2lVD+PrPZttp3298+uWbmJ3rayFUdnFloItLwIfp/TDGxTxzhmb3WaNtZgbIt/Hj/bXTfe9gC9y9i0hmjqrzqQq/liUdCZxHBZwpKx+O/p2ipo5TBoEELkp44gtmeHO6e9Y7WerksB3vfnbD3fQ92sdthF1OvKow8WYHS2hS8Xqb8F1jcn8LiflamhjevXV6yJylfTLmog3K/1Lk8FsdXuMw3gTr0MX77BGU+EYxhtohh+PdQmMqHdmaftNcVYbsQC0ZXz30+U9u5/D3WvHwSkZOrcTz4oNTtQ7+NPZpBURa1RDT1b8zWQdxmm1bejW1LoQ31scnX4YD1g3T3oPwN+OQFk3bRWLZ9wMt0+vT9mbq+vmnpQAdjZ6c4PQdv4dm43++j1FGvagm7eWRVL7pOjgT+qTBkJA6rxmRjVg3NoBxY0Lrf/rWuDs1PyfwWAHCEokCQ4+5PcfJg+em+aCYQuvs9BB5X+ZfE9VhvbkiT7GxEunGMx3uzEblm1U1bkTHeu5zVvvlG5GoGBRdXWEvIcUywbzira584uNHNjYuL99r6LErfO0Dwo4zYbykxYeHr3FaiMfBlXsxuSFOUQIG8x+nxgTvWs09reEWNTNr+AQLh2jKDxwRNoLQ0159PZfoghh0u9fiqDx5+omnpeEHZQ9iBlMIGtldI/NLSCv/DVqppQzhQC0DaaUCMLnNV1sJyC2JqDz3iqacc8SN37FOaH0KOOHKwZ4Zu7pgmUGKRwOM4IH0Do7+81FP7/53HrZDa9rHkk4STYxXQirh0WbYUU716bA0Ha0ALCoLgMBhwrHS+L32tJ+1vLU0NEbwXVZnW3EzjzQjKlqfB2eonf6QIctCjjx3pntbBg9oYXXpaSrAnlBMtZsqKMnft7EwNmv177KX6UtpGAQwpZYQtcXpqzze7Da3yYuGGpQq3TSL03BJPHf6u78kISjzccDHexPsVipDLUzc93cwGcIGlvftW4xt6jPL5KK2q8+rrgvFaKhWWyQr3uC8T4mpntf93xqVmLwHmpztgfppPmfiBq8p/R/YS2mtoAeUphf8EUC4BKH9KNwSD5IswSJ6OWbK8tNo3R28HzKrXEq33UU5VQgO1ia+5KvzPmSVbq5w4znFwzcA5ji7E3dL1WusdXK5bUN56vv7YvcV0q1LpSCYNOqHK+x/l74lw4G5OyHcxS1qHSQMmDaqYvlNvB8ysB6X8Gkr5Ca5q38FV7ZfNlK1FlsquFPxOJmFbXKl/W9wtKBtWhS5nTP4j5tNfcVKdoXSsNRq4SOZEnTFcJm6j5w8tg82mTDxSH8UBt5Ix6SpnlffubOoaLZu+9MPXYwG+HjfpldctKPGm+udgq5oiJHFBWaX/oc2vPnrUnj37NqoLu8QuLausvV9vw1bVi0Ub5sDbK4SF/60yj2+EVe10JTfNdjHKpjwkKOsaVxxvs7dtURq3O6SvjZ7ofQ5Mjj/CLnU5tn2wffkz2r5yqZDObUE5L8GSiXuez2/hrewTDth/Uf1dbOI8I+e0Q4LS0hy8hMp80YFBUAAE5jwem6CnjKmuW2flAI3IThMbwNDc5Kqu+x/fSSNyM9XFp/Nv+HROp1Q62+X2/i1T+UP93u3nS7V+8tQcWG5n4w04SRXC6M3Y/t6ot8Fc1QM5cAt2QcfjTzl2QqAEWf8kIoEojJKVRXapapQB94mMW+L0UDY1LZ2SJNKc0uq6y6wfnvEWEmCbcLBNjH7fs+kJZkqr4tUsF9udYyfMbs2mbueymkHR20BP1cNbewHe2sW4pn0M17S6bkiz6bvAbWqcy3uUOq5/Sw4j5p6CBeXNtaET9+2T38GZZSfOLAOyUbCesmC2KIbaVfjUv+zy+Ds8j/XIKlhQFGXEw4GWzyzXlq8rLeHgDyjhv8eiex+Mtt/RA0a6TmGD0gRTECWn4+KpBhdPLxpRVKa6sUj9w0TQuWac3woaFJywl8EaMRvK8mKDsiyTYo38nl7kU1Jq/LjK8wy5oBc0KGknJkmSriip9N5rROnd1W13SZc/wrloP85FxUbbKWhQcAl2s0z4zxHR4kanp86yu/zE6uAsnuJwAaGRUk+d5wtQutHAAbKHuA33Gz82qqxD1U9fbuFc9ONyT91tRtsp6JkSC9fDTZxea7NJ142p8P7aqLK6qq9Sr8J8Jwgjjn6Cjzipeu5bRtspcFCC4BPwyxij33FW1d1nVFld1YeRViEaBnqUS2zFwKySiXOKcnfvJZKoLa30h6xoJ73Dk4T0/ZJq751mtFHQMyUexn0QoVOsuh7+sDHU7yOHvEMhBw6wFZ1wfMWsd78AJYMGEuHgWoSNGi+BDW82KVC1GDQ1zMNaAjc79rzLUzvVDEAUGQU9U2CPUoLzDOfFxSPLLQjUE4sG1oDvdprZa1ZBgwK/kT0KKRxBb44eWz33Y7PeZEXORoTMSjH+qBUkjYIFpfXl+rHyXroO0SFed1X5RpsJiCILs+QFzJKvWMEzK1hQEs24T5Fxn0JpEDePdWaCsqlpxZQkbXtOiQjrdIwaRidMSJopv2BBwSlbCY94pSSJn5RU+m81U2nwof8ryInnMMpucrprF5gpu6AX+jTZ2i74VDM9v9a/GKqUbHIUoOxPCXmY2WtVQYOCg+NeHByLOzM7zXijwYJ8VfHZBJn8tyCTX2OGzINlFOTna2NTw7gUFa/BOrwJ1mHTKEaJ1cthDU4q1uBPaXFytGvCee9/AYpGDcAedQXsUfcwiTU4K2t9GqtlLBZraogjzLjT6rCFBTlT8Ol6Fp+uqXBYPR/hOZZk1LaGAolwww1wUFoAyu5L4AlP0lBFd5GCA2VzY2joHrusflaG2gYMMMMj4LU1j4y2J/erUfCK4BltddS/ggMlFg6CScLvxfnkcZxPvqn7de1UETIRc4Wfo4SBL3XXXWiGzO5kFB4oTfVPQ3nT4CNyIXxEHjSqwA7qEAIXHC1L5cMme7cZlZmpfkGB8kZkyZD9wv6BMugjksUDjcZ1Se/iFHnIJVI3xuMLZlKoGb8XFCiJptClnMq4YWRPgBAHb2ZjDxb3RizuZ4DUvgik9pxxqAsKFJjqleh0ZyJr0UWl1bV/NgJJx26LsTdchI6lVd69RuRlU7dgQHl9TaiyLSkj1Aj9dHCSDRtS4/00G0V0LhtfXT9VpKgaV9mor4mePhQMKGnaqNHwie8j2M/HkvxPxR8Hscd+46quvVaPYo3UKQhQ3sQ5Yt9n54i2JDn51Brf23qVAmvAY7AGzIB73jOl1f4z9coxUq8gQDkQVID8GRdaF+lVSKI5eCNikN2ERIQf8CSZCM9n1ecz10/eg6LyeIW8VckMxIQ0wVntfVmPEmOrl80gqdRjSl0zg3Tq6Uveg5KO1tfZ1z9bRbSuXHKybLOvVlzRreYda+lbvoNCYXx8D8bHYcxuP1NvGlrQW5uwz/IgVNWjiB32LS2Ks7JMXoPSsQYgtmSpx/+5OGRaFIeQJg8ipMn5UETMUSy5kR11h5Z6VpbJW1BAjPgyIga9pYSg1XvlmwiHYI6XFyiB45KMeMZV9ly+yc4g5y0o6URsYJQ8DEdTNTVTNk9sVf25MJ/8RV3YTQjGmU3bmcrmJSiIA3wG4gCrub4cTBqVbdRV5fSfTIkI4itTK9gumZSe6fe8BCUde4VK5JeuSt/PMw2y8++bY7gE+4SHcThEMB3jnrzZtK21bN6BkojggCf4TQjaswFBe8ZqHahSDusPQzraRjUJjxDPIyy8aaTsbPqRqWxegQLT/HiY5tVY8npytiDsVAhhpxBrhsQGcqkmFxdWmQDo6ve8AgVGx3/A/boGZ4q74fB5VTYDxnnmbpxnvosBb4fptyZXQXSy6WO6bN6Akmiq/xGn9LdgJm7uk9zrOrnmQjUGsJanJRr4OeVE9Q6WqPhqidv/Dy31eqpMXoCiBKPmlKmfLWZjs50VtZqTKydW4zYypdxGYk1hwl9W5Q/0lLK1tpsXoKTjQmabIa+zkdFoWFqtCjWjXK8HBex5uF2La5XF2emWxlHqlbUMfNPK4OSUREDK4w6U/xXCwSv5s/Li6dWgxJqXfZ3IqaeyXQuUhKCMJ5+FTesYrEEPIJ5ye/ryPHl6LShbn1nS96N+jtfAcB+ZTUjZNxpDI5GjBYDwkzG4kMvjq80TLDq62WtBQbCbBxAh/NsIN9hY6q79ihbFvhF5ZkhS/Oc5zJCxB4eB11K/t5TplaB0UE8FUrIxcoqWM0V7uECOUOrCDcNxZKfEplblkBZkJqC9DhSkfBovfbb9PTi+fncDT3O+wEJZX8ySU0e653VkrzBTYbmQ1etAiUWDLxHOJ+LkvkhrZNcO84mgm+U+jqlW+MznAox0G70KlNbm4D2yzK/AHcmrCHAzXkvmoI57FZhPbEXS1NGneV/LpQKtaKvXgNIaabhQFkKlmtoYnzSmaq6SD6XbB/cqi3CvcglhbA9m15k4i+CuPf+fXgEKCHBlMBa+rKS+hXX9yrLq2nsyqRYRuu/BTLoCG4GkXebTzfQAztS2lt8T0YZrERf5c/6WWvxbegUo2G2F4ZTjBpvkIbBJLsg0aJhd7sAOqz1tn2RD2vE5pqUdz9S2lt+FeMrRGtm5BYz9wZ3LI8PGs2XuummZZPQ4KAcyTdCWPm17J2ay/iIy0W04GF6t4mFiZutMisrm93TGIcz8OILp3IbwVt9UqLCSxH5TUpmZm9yjoKTPI+1vvL2itHL2mu4GvzESXJgSXLVhZWstzkapRspuC4eRX/ndLQBhQJqLls7+Rzn3uSbPbU+D2M3TY6AkXgpU8Taipk23IUHOmAwJcjCwm2BuUbNRYC3x4UCZcXCZBm/F7x0pqDollsPL9w4+zyf2IVLJcI9XdWjtdaAoEeW2OTjOI8Kp5RYxHg4iwh2fogJIybwxbp9KDeptz4bmR5xM3h9X+2mTqhFMNPzBhvpjt++gW7OJud8jMwXrSAOmd62WYJidbw2xV76otMKYh5aVQGJHGMAsrutsmW6N1p8pc/p3ED1Wgehxupb2cw4KzCHKmrAQq8InxX1Tp404de7rh+roAVqqEsLvf1MaahlcLstsjATOSwmyRGFbyikxJu1GkYjWI9s4vQWXbHciNvL3tfQpp6Bsii47O8lTajJoZrPjWnf2Ia91Y9H6BYTTG9RBmODDqEUZesso1wVtdh5V0uVyLl1RPvlACPd0xFesmxdg3XxISxs5A0XJoGrbt79Z3btnSCGVDoeugmeSP7wWZegpoySUKypqCylpn7D1faTMUzers5x4U2ATMlOMyiaPWc5AiUeDKwXnk7vq+P8MItLwS6w3P1P+n5mxVfQoPFOdjeGl02VC/4QxDUNnXxv06X7P0Gnzdqfrvdq4+Kgie/HH2C624SSvXEtrenICCqL/3IfoP5fivY/v2tm/smJ61xlUsd7cgl5fp/QcNq155b10lxVbFfgqKLMXqOkDlZcHIUeOaut78XE152zvrPU05xlKXoMb0ApNiCjytBbUWw7+iN8Hj/p2xeKLe5KKMVXeLg2N6f290o7RLNV6+6rUW7v2Pru0q6jvEY6+fWVGXBIhe0UbGSrsqWFCZuMIE/+HG9FTO9pgAtn8/F1m8zuQfUgg+5Bfc/YhS0FJrFk+jSeTTysDSGdV7UphAO5WAPdZlDn6KV6VNiOK1VoXnGJYQeAJgZWLcQRfZ4IpvpOZ6ithb7GdX+zgtgeHu2fhYNj1A5MQMujxednGLbYMlLciK07ay5Or8dkaign5a9BM1c/SwU9LuOF2JBfTtFXMpCwzfsf6kAJQWBfEboS43Q0j4oewYH9gk+jWVIrE7Xa6TjkUamkrHgmuB/DlWkxIneVZBkqa99tdiCfFs1fL4Kwqk9pv5/3sg+VjiovlF3dt4P37t8kTJlxmSjjbzY2Li/fYi9XQIS43UgxSr+bZbwkoHTeIiOHYV8gVyCliavRsq0AyU+56OCZJ7WFJ1uErcUo2sk0HJZ2TXekEL0Jq9NN86Njh97Q2hy6XZSVtfPaB20wFpTOjkTNycXmV74HDD472EePQuAiHxkv05FUxDZQ3Vy8dtT/JoujIMd0t7IcLSGlWjp0WnT7aPWtVNuM2BRQcomhrNBBRTQ1UrChz+2dn04lCLAtiOjYMwrZr54ABhzosH2rcpoASjzYsEVzAbZquG7S7zd3Z1FCICs80ptg/l59K9idfwXl5I8z1JZnKH/y7YVA6IsgRshtGN/eY6rp12Xai0MrHmoLgQPMHkMajwVntzzpYtSFQNq0J+pJJXq8oNZMpvtAU3914sAO9C94CV0mSDRkp5mSdkUI3KBsjDROTgiA7grDBjHAdGI2W5FHMRzBhWFVIgR6OwNLlFXPUsIfZPLpAAQl7IPLxRpQ79nx0yslGQXrKYpHfhUW+39FcGqLHLVwXKOmI1oyRlc4q3xl6Ol6oddLkCXw93sbX42Q948waFOy07sBOaz5j7D2HsLm7s5Lq6VC+10lEA37kfVyKiBaPIaLFTD3jyQqU9N2I0lA++KPrUYjROnhpcQ0hrmFEQmZvr67M3ppB6ez+fLibULoDLp2F1QilVhMoravqx3KJhEGq7q8ncpDRty+f6oN8vh16GoTMeSfqjdaaERSFG7udbAkrzp0gByyFU6h6L/3F83kNYFc6HFfeyMJKt8JcP0yvjjKCkg6eDPSjCOrv0eJdpbcz+V5vU/OybyXl1AqjnsndgpL2A8FO4v0UER6kz3sr3xVnZf9bmgO/gD/z9WjDUISLQ4KyoSk0n1H5DnUQnEwpnex7wcoBFYJseG89wbk4G2RDL1J7LNM7pi5BaQ2HviET+XF164vLqpLD+LIqG8XiU/8uiIRfKrbx0SMqDs2RziTzc6AgnF+5EDJ2WuRIfLYW4gCkTMcvngwa+Ff48eN2kT3vAZRPyqr9A40o7HOgpMNvYLFajUAzlUaEH05145HQWXiZnwSlCmFL/JrClhxKP4cEBQa1+ygXLx5OijU0VsZmgh/mBVHi9+AN/8iIrG5AMSL28K1rhqdZl6AgW88Rh69ajY0cdq+FWgL8dNfKfwEKm8cg9s8pGgAAAABJRU5ErkJggg==" dataname="2" transform="translate(1848.5 3402.344)"/></svg>
                    </div>

                    <p className='absolute top-5 right-8 w-[245px] lg:top-11 lg:right-16 lg:w-[417px] text-base lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>

            </div>

            

        </section>
    );
}