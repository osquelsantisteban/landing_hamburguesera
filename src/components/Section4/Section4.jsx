import React from 'react';

export default function Section4(){
    return (
        <section className='mb-8'>
                <div className='w-[706px]'>
                    <h2 className='text-2xl lg:text-5xl'>¿Qué es lo diferente?</h2>
                </div>

                <div className='relative my-32'>
                    <div className='lg:w-[100px] lg:h-[137px]'>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="1861.5 3075.333 101 137.017"><image xlinkHref="data:image/png;base64,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" data-name="1" transform="translate(1862.5 3076.344)"/></svg>
                    </div>

                    <p className='absolute top-11 left-16 w-[417px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>

                <div className='relative my-32'>
                    <div className='absolute lg:w-[100px] lg:h-[137px]'>
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="1847.5 3401.333 101 137.017"><image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAACJCAYAAAA1+vY2AAAY50lEQVR4Xu1dCXhU1dk+596ZCQEiIJDMJLigVJnMJEAmE0CwhgrV4t6KW12wWq38uLVal7orrdW21r1qrai17nXX3xVUlCWZAbKCVZZCZiYkKBC2ZOae0/fccOOIJHPn3juTycB5Hh7QOev33rN933u+j5IMTZsmlxyyrSM2hSryFE7YFEpIYbJdpYQ2MM5qZGpbTjlbWhCsfzfZOnojP8aaGYnPmOFoXlN3Cue0khNpCuHs8PieoaMcQm7hhLTiXy1E4i3ib0Z4i8xZHiF0EJf5YIa/8f+HypyXMkKk3UbXSqj0mp3Jrw4PLn8zM0b+/V70OihtR44avmV7zmxKyWzC+f5dXaRkI0CYR5g032G3zRu6eGlDMkIEyHLrqpVjYlJsjMKkMRLhlcB1jFYHJXwzAHo8h/e7d/9A4L/J1J3qvL0GSrPPd6gidcyWOJvNOLeJgXKJfEiY/L7kkOa5Fi5fYvXgI76SEkZiJ1GJnMQZLf8WIOlhG43eO7x65Uqr2zRSX9pB2Th+XHGURa9ijJ3fJRRJ+jdh/AFXoH6ekUEYKRMa5y2XbOxyxsjZXeUl+qjdFbtq+Osr24zUaVWZtIISqii+WFLo/dgH7OrMIHSug8j3Dw/UBK0aULL1fF1e6t3Jo5djT7pQLUvpemxEVzur659Lti6r8qcFlM3HTNx/W+uW+wHDWRoYdkfOnPyFwS+tGojZejqXNnY3+niMig2Xnh4Yk67Kq6nZYLbuZMunHJRmn/tkhUr3YRM/ABv3NpyaLnVVNTyRbEfTlT/i817GCf8T/tghnDUKY2eNWLpiYbraVz+IVDYWLvf8mXP+684vj7wj0dxLCwKBr1LZphV1b5hYNkpp33kfzuA/wYcUxd9nFlbXv2xF3XrqSBkoTT7PEzh2zhSdkCRyvbOq4Q96OpRJeUI+72OEMHWvkYh0uTNQd186+pcSUJrKih/HveMXYrnijE0vXNr4SToGk4o28HHdio/rJrVuWf514ZLae1LRTnydloMS8rkfxWL1S1zMdlDOj0vnMTdVwgqXeZ/ilJ3TOWPknzsDtf9KVVuW7ynh8uKHOSe/AigdEpOnO5fWfJjKzqez7lCF+3dEoXeowDDb1FSOzbKZ0uRzP4jlapZEaYxy23EFgeXvpVNo6WgrXO69j3N2KY5HG+1EmZQqDYAloIR8JThhKX8WSkOZysflV9e+kw4h9UYbEb/3OWgjTqdEessVqDs+FX0wDcqG8jHjYjyq3shtNtuM/MU1L6Wio5lS5/qjRw+VN8t1OOo7obG+rCjQgEuxtck0KGF/8ceckR/iy3kYX84sa7uXmbXh9n8WI8oz4g6j5CreEQtWfGFlT02B0lThvYUq7GactFa6RrpL6YsvdljZuUyuK1zufhK2n3Nx83+zKNB4gpV9NQxKaJz7h0SiH6udkWw/Kayq+X8rO5bpdW3xHTZsK7FjhvAhCpWnH2DhPmoclPLiINS842Qu31UQrL0m04WYiv5FyrzXM8rmQGPxITQWU61qwxAoWLbuwrJ1NZV4tauq0W9VZ/paPcKEHVnVsA5LWL5EbSc5q2tet2IMSYPCcfoIb5JDmLYO6FEnFy2q/8yKjvTVOsJl7qs5pXfBmvkJtN9HWTGOpEGJ+EtuZ0y5AY2/WhhoOMVIJ/iMEbktq4b6ojI/wKZEB3OJDoZ6fwgIEN/gmBnhxBZmRIoMGDB4zZD58zcZaSNdZdBfGvYVC5vLMPAJ/IVL66rNtp0UKC0nHp6nhOQmxkme3cEqhy9c0bnR60hhn/c4qMABIvfBtjJWR5FdWei7MDi9wXnsTSg21+ovl76cIV/xvWjtMonze5zBRtVUYSYlBQqUjZgh9HZogN92VTccl6jhVp9vdJS0X4gz/Rk40xftlj+IQXzBqSxmxyYuK5uoIg2hhLlAMXIiL/58yz7pLEsXyHZ2a8Gixg8StZ3O39f5SsfLJLaIUtrsqq4XfTeVdIMiNrXQ6voQjFVDZWI/pifdlqANbdtmv45ReqXWO9gjapmsPC/LOfPyW7YG6Jdftifq+dqSkiH2nNjxlNMTOJWOBxcsV4UGplo5x3FbJpmTw353lWDIUGg1XCa1GrpB0Ta0RMe/iN8Nhoj0e3zl/TuFzh+THfLcgoV1nycCoaffX5hB5CO/Kr4BysCbMLNUkp0syTcXVNXeZqZeq8rGaZHvw14LIobxpBuUJl9xEzIXShI90VlV/8buTa6eWdmvX03ro5rdAXJ7hTDyeys2vvi2whPGHkyV2E0aRUmW+IMFVY2zjYvAmpJhnwf0Wv6RFdcEXaCs95WeJ5HYXLGmFwbqj9x9GKGy0T5Jkp7EAcCDtWUHofJFhVV1/7RmuHuuBTPydMaoSgPCIF50BhqgucV1tpcSHzUqJzzIsVM0by9S9jPDHdMFSqTM8xqj/ER8/ZcUBur+Fj9uldQm8zfBciwQoOXYHBcnSzE1KkfxdcKG/jz4Y8Oxz3zsPNT9497UvzWVuT/DZn+ETBj23BWG7UkJQenkbG3eKASXF7UVxPOgwhPHVNCO2Bsg1+VjM37ZFaw/1aiAjZYL+8d4CI8+D4unh1LpKVd13XlG6zJbLuTzPCO4bTInZxcEG/BvYykhKBGfB0da/pigCLmCDdO1ZlQuMNmxCP89TCwfrkDDaca6YL6UoMJ2xDqWYE0fIBNyVUGg4c/ma02+BrBf/oqZe7nE6ZXOYD3+bSwlBCVcVvy24D9JIEM4A/V/15oBmWA+NvWjMF1fwtl8hrHmrSvVVFF6Jg4AKqGB26QfFy2ue9+62vXVtB73OMjpdolLc5zBOqH1MJR6BKV5vLdAibGIqHnAsEFDB7278Gvx72a/+wGF0f/DHrLCld8+nr7z5RZDrVtcCHeFO3FXuAaDWouZe7DF1SesTrArQX0Vt3tTx+IeQQHylwD5hzAdX8d0PEn0qqnCfQFVqDpjZIc0yez9I+FIk8zQ5Pd+ThmbSGX5UteS2geSLG4qu2b047J0a9GSuluMVtYjKCDVvQ+VylQbsc3MD9Q8+U1l5eCdbS0rVVU1ly9yBmvBIMysBOXgDJyLX8CyugrL6qHp7J3GdjHLpuwWlI2V40e0t7WtE4PKwRo9FGs0lIoP4f3hJXp1X+kUSHxb4TLPEk457DzfP8Knsk8Rf/HT6nsXSTrHzD2tW1AiZSW/ZFQB23FXonSdYM6ry5ZMxxYsqV+eygGaqVsjNuCA8kVRdcN33k6aqTdRWZAR38LRfDpIJMeDRPJWovzd/d7j8iW0nzbCcLJip2JJOEhUAm3vbaCi3my0wXSVayr3rANtdkQ/aivZv7qmLh3tghP2OdQ/E3MYO2KoiecTCY/E2mCaJ7inKoo0o7Cq/uJ0DNBsG1jfwTZh55pd35PpR6jcu0K8anaQXPewQGBFMmXj8+oGxWgDvVVufVnJTIkq4nGSYQtpMn2HaSM3vKp+uyjjOsSTY0bdk7WgfO3zHbiT7FiLQ8kWGOQGJSNgI3k3lJUeGaMxPPmQAtAPdr08NlJX1oIihIGNF/RS4knHvhKqKLmSKMpfcJt/BLd5vDwwnrIbFE0VZHdMcS1aNt+4mBKXhN4Lpgr2cyvub9kNSrnnRRCxT8UgT4Pa5cXEojWeQ9vk7cTmM/sEPctB6XzEJBM+qyDQ+LBxkfdcUjNv4NrQDhZ+P7PtZDcoPvdtMIDdSGHLd6XQlh8q9/wMF+uX4BjhM7winrwPlB4koJE9oCC8GwrC35oVVnflNeMWLqu/dQUb4SDBXMrqmQJh4Zk4v9ZG5OvyA7V3mhPVnkur1KtV9VsgyJz+ufKhgxfUrjLbTlaDAlb838CKv5jI5FeFSxoeMSusPZVvKfecEeX82V7lEqdiYKmqM+Irfh6O2E5jXDp9RLDuhVS0A68a6glPkvgVzqpGYeAynbJ6poRgD4IGdWqqzMO8snJgc9uGzcID3+C8vAP6z1+83jQiqCC7QfF5wYBnPqvY8LsLvLnCc66i8CfBNvugMNgwzQpARB1ZDUqk3PMV+GiHyCR3VCoc9WDpWoylq8LqPSurQcEte7sghUc75P0Pqq39xqovWdSjuswi9JVUkDSyFpSvx3tLd8aYsI7+B4Trw6wERNQFPtyH4MP9CPvJVSMs5pllLShh2FM47CngOD/vrKo7w0pQWmHw64hScYjY6OK5LhoIRK2sP4tB8dwP8sRs+Cq+pmhJ411WCq3J73mdMn4CWKO3gDV6q5V1Z/VG30W2tvNpVr78Wj9u9ETMPvHWpr1/h+wabPFeld2glBfD3xjpF8/stOKLhvJxqXizCY3wn6ARvtqKOnevIyuXL9wfxuD+sAxr/heFFlKMNG0wGD1b20m/ww4OBML7QNEpgbDfM4sz/iBMs8/BNHumzmIJs+E9TAPYoe5Uuy3MypmC+8l7uJ9MA2nwPJAGn0oobR0Zwv6SmzhTbgUddgnosON1FDGcJetAWe33O3PYNnVZceV3DLLiRcD6yaMPk3ZIqh/8RC+jDSMRVzDrQAGBAUwS9jD2k9ewn5xshZAiOAIzHIGFG/iiQP35VtTZUx1ZCIoHLq74MZTL57uCtXPNClCjDgnHBQNz20vyPv2yxWydicpnFShtpaX5bfZYsxh0bl7+ELN+XbpOcajPJvEz8qsan08kUCt+zypQQmUlFxGqPIK3/m/grT9eM5tLkXLvPISPqoSzuUfTyaHOKlBwFH4HR+FjbVS6IL+67h9mINFOW3jJ9mXBIZvhinH9DjP1JVM2a0DZCPVHO9Qf4mLnzBvuovPnb01GEPF5N473TmuPMfUdvNm3Jkb6kDWgaLRRs+4ThbOfrdsdVeI9Dlx6/BGe/641IlgzZbIClPh7RLvdMXLkomVrjAolVF78Ksy7eHRL34XLk2ON1mOmXFaA8q1TAfIPZ7DhAqMCaS4rvlmh5Ba4hm+29+/vH/pJlfrmM92pz4MieLzbW7fAxSHifHFWXhhcETAixKbxJSfRmPKqKGulk04jfenzoGje+uLf+icriDUVpSP7Kcoi4WMmE3yI9XVQhFPNJmzKLpnTY42GoQW99VNoAUDMll7BK6yfJguq1fn7NCjaHtCdHzI9wgr73HOh0zoPz/Dqc3juJERH3aynXCrz9FlQhIc8Eu1YJVzQygZNvs1QxytQx4uoSHYuTTb72McqoPosKFogNvi0/CdcmquhmZJJIb/3bMLY06JMpoUY6ZOgYJZU8miHGtJ2gKPfDwYlGcRT3P47JOkzMcso2C4ui9kuyXwce8rbN0HZ5XtFkuQ7nFW1NyYjhK0wgrWx7QtwhD7Uipe8ybStN2+fAwVO4W6Gz5VboJOqhf+TUr0DFfmE61w4tZkngvDgLeQHRRaSspPpR6K8fQoU4dUVm3KnL3kDMVtwfH4BwMyQcNIakNsxJR0Gq0QA9PnlC2ySj7DsTIET0QfgRPTSZAbcBG9+VPXmR1pj1DblwDQ50Ummj1rePjNT1vuKfwO33X+CR9XVO73DikfOna/6ANaTmn0lNypEUT19O7jt6GHBmo/0lOutPH0ClO8sW5SemkxwZc0aqe4psu2soiU1z/aWsPW22ydA6fILmWSEvAiUjExTMpp0S6tXoFbky3hQtGfXQg3iHOkZA5dNip6B7wrkJqyHOTgV/AE6rev1lMuEPBkNyobykp/EuPK2etjCXuDUuRfsCggqABmG09rjhdV1avjyvpIyFhReWjqg2a4sgzp9FIVLWZdOl7IbJpaNUqId78Er3kgcDF4QgQn6ChgZf/rSYtqDTTIPnsN/pEewgve1zR59nxFaursbeD3lMyVPRs6U9aCeSqCeUsqVHGIfq8cxp+oucHXD+3g7Mkk4rnGN3DwtnbQgKwHNOFDij7+7+9fvaeAa5wuXy5r9ovZp8dErrBRYOurKOFC6HD0nwUrU1CfiYinxnGmpeDOfDjAyck+Bh/AH4SF8FhhwS+GM04cvJmHkIM2uggG1MskxbUTVsmXpFGAq2sqYmYIQ6udDe6tSTanDPt61cPmSRAMGaQIexukv8We7jcvH5gdrYGvv+ykjQPlvealX5kqAIvQtnjDMxhOGBxOJtgmzCjEhZ2HfiVI7m27lC+BEbev5Ha7dr0X/vufSvUDH+5aMAAUPPBeIUxNAedIVaJyZaNAa+U7ksyHseL6FYccTta3ndxE0LTKoHwI9s+Hfzc/fKww0HpOojl4HJS7SRN1Ob74/kfYXoQ3vRqevEgPrbdJcd8LtihxLaIPCpbslSTlZUGER/vCPCH+YkJvcq6B0PYXD6BzENmFYoGZxT19RqKJ4DlFIpw4rSW1xoq/Tqt9FfOVYk4RZQgdpXLQmRP/DnetE0GHPdFbXq2EQe0q9BkrzxLFHKB0dath0PQ6WwxXeW7jC1GgUegeXaPCp+B2hse5EaKxr4jUKUKquxUHyQDtVRg+vXqk+aM04UIRHuUhbi4g25wbd9AGElurRihjyw8MdI1M7Zwg/t7C6UaUGZVoKTShzk+jOBtEvG7EfmR9YvmAr4pptQVwzmKC3OHX63O+VmYI4I88hzsjpepxhxlsNrXihlUog4Q/mWTxYPSNeMx3ylx5LWOwdPWPV+pZ2UOAB9Xp4QJ2DT36TTWEV+csa/9OdoDTmirpk7RbSMJXCNVJ3qNx9DuH0KRGmN6f/wMO1ZxRgz1yHkFAIcC3dC5vOFXrqTisoLWVjjo/SaGcw6AQbNW7qt+KIfFPnHiJd4DT5hlGPMIzmUc0FHR2fiyMwTA2zRsS5cNc8vmrB5vS0kTZQRARVRtoXio4nCiEF0rXqDr1zC7HmPbweYRjJIwLKRbdte0GEfcJzvH/jOd7P4uvBEf4LCPkHycQxSxsoUKN8LEhwe+p4/CCwvN2B5e134v9Z6VvFiMATldkw3j1didG/i6cYmPnLXB3yZFpTs00rtxohGHPaNnyDD6wDnipgltaX0gJKyO95hDB+EWZIgyO/feLQbiKo4t6CtZdd17m8Ze4pa/240qNttthMNXyg2lfy2kAeu3C/wBet8WLXOM+wgC6GBXSCPkjS4AIXYdOvQNj0e1SNr8M+oTtFoxZiVp0hJqNU6x38nvJxn8++Ji9vQN433wygVClGZNUdMRt3RmMxF0wDY/DRlGEk47SymAW3YRbsMZqf0ehDKZ0pzWWeYxTK4StFnNs7o6ruSRAI73oXVZjqZU68gwdXuMOMYPWWBZ8YzingZZKDew9WmIyzLDZqe6LyENpaiZMnFM7nFi5txMVwz0mLoJes3+KUgQKKz0EgPCyCM2UnRH0nnj93Lku7pZDffQ9hVNdRMZGwrPgd94wYHrRug51f7A3b8N8bKGXNhMkRHHkbZCotF5dCPW1Br1eDg02JAhXSAQlUSPH1pQwUjffbk4sn8bJXz+BSlYe157DYfmFlWNNAZU1JHttY26aUW+TOdvXMyn45tRtU1yHJhhhMCSiaBVGEiR3QLk9IhUfSVAFlVb3femWly7FKjE2mXstBiYvJjtDoDoRGXybcxe51CW7XL4Hb9YewT83VY9hK2fIVz2jE9nkhnDQ/vtehsWvAmqnaSFwVy2bKurFucWsVs2JYTxv73gJSFyuH8aNwQkOkVP3JElDEg85mv/czVdXA6ct40HOq/i5kZ06E8UBUKG7LgXPR7i7L3Y3cElDCZd6nOGV4Nk2Xu6LypHhVQ3aKvOdR7SKYB3HtWQly+ehkZWAalC5/vTjXSzKZBD/AIjzGXp3g5vAXcHP4uFFn1aZAiVSUnsmU2L9UBDLUZt4bXwdAuQ+gXEplijf69UlHpDAMSusRHn+0g3wu1k0JcRSdKYqj2BtCNdum5oDHqGNpQ6CsLSkZ4nAweGyA3/c++CjHrNATlYc2ow2yGZjXf2h+3qefJu3H2BAomkdryqWPXcG6ykSd3Jt+18gTEOwaRPYeaWTsSYPyLTtRaiJMmdSTltRIh/p6GdBVz2JEeQbjeBWxwE4xMp6kQNFsI6KhvvAe3YhAzJZphhlCgRnCjIc93aDE+1jc21UoPQGnRWE1Q6nVBco6hOcDHWgBjEJ5NngOyk/Sc5DZr68vlYcL3VZYJofmDBhwoFFvrQlBEdxYpUlaIB53guzzDLhLnXbpfel7Elg7ueQQ+w7lKxjGIgh84zIqooSgdDlP5vxzV7Bxsmpr35f2KIGQf8xPCYu+bPZlco+g4JXuX/FK93JkCufmypMHL6hdtQ+P7iUQ8Zfczphyg1kPF92CEvG7L2eM/lV0gTHb1BFLaz7cB0jPEoCB7w1G2PEQ6mm4o7xoVF57BCVSXnoi47HXRKU2GKvy92JjVTKCxR0O8ehZEcIZHnZADxzpRHV+DxRcfkoQc1ectPaDlnMOQvJhOu5LiSTQMu7wwqgkw3E13QQe2JBE+Xv6/fuglBU/zij5BXbzRYj4OdFM5XtTWZBFjgOd6E3w1ua5dLot6U4+3YICpvsjOGjN35sEa2asIOadIvYSHIf/guPwb8zU1S0oZirdq8tawIHeIyg40vXfqwVrYvAOSZqjx8FPT038D0qpnyCw8sIlAAAAAElFTkSuQmCC" data-name="2" transform="translate(1848.5 3402.344)"/></svg>
                    </div>

                    <p className='absolute top-11 left-16 w-[417px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>
            
        </section>
    );
}