class LazyToast {
    
    constructor(config = {}) {            
        this.duration = config.duration ? config.duration : 3000;
        this.config = config;
        this.css = config.css ? config.css : '';
        this.toast_id = 0;
        this.position = config.position ? config.position : 'top-right';
        this.stop = false;
        this.main();
    }

    main() {
        var content = document.createElement('div');
        if(this.position == 'top-right'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-end"></div></div>`
        }else if(this.position == 'top-center'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-center"></div></div>`
        }else if(this.position == 'bottom-center'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-center"></div></div>`
        }else if(this.position == 'top-left'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-start"></div></div>`
        }else if (this.position == 'bottom-right'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-end"></div></div>`
        }else if (this.position == 'bottom-left'){
            content.innerHTML = `<div aria-live="assertive" class="${this.css} pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"><div id="toast-lazy-ilsya" class="flex w-full flex-col items-center space-y-4 sm:items-start"></div></div>`
        }else{
            console.error('Invalid position.','aviabale position: top-right, top-left, bottom-right, bottom-left, bottom-center, top-center');
            return this.stop = true;
        }
        document.querySelector('body').appendChild(content)
    }

    getIcon(style) {
        if(style == 'success'){
            return `<div class="flex-shrink-0"><svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>`;
        } else if(style == 'warning'){
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>`;
        } else if(style == 'error'){
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`;
        } else if(style == 'bug'){
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v-1a3 3 0 0 1 6 0v1"></path><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"></path><path d="M3 13l4 0"></path><path d="M17 13l4 0"></path><path d="M12 20l0 -6"></path><path d="M4 19l3.35 -2"></path><path d="M20 19l-3.35 -2"></path><path d="M4 7l3.75 2.4"></path><path d="M20 7l-3.75 2.4"></path></svg>`;
        } else if(style == 'info'){
            return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`;
        } else {
            return '';
        }
    }

    toast(paras) {
        if(this.stop) return;
        let i = this.toast_id++;
        if(this.position == 'top-right' || this.position == 'bottom-right'){
            var _position = 'translate-x-24';
        } else {
            var _position = '-translate-x-24';
        }
        let _html = `
        <div  id="toastlazykey-${i}" class="${paras.css ?? ''} pointer-events-auto transition-all ${_position} invisible opacity-0 w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
                <div class="flex items-start">
                      ${this.getIcon(paras.style)}
                    <div class="ml-3 w-0 flex-1 pt-0.5">
                        ${paras.title ? '<p class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-50 toast-ilsya-title">'+paras.title+'</p>' : ''}
                        ${paras.msg ? '<p class="text-sm text-gray-500 dark:text-gray-300 toast-ilsya-msg">'+paras.msg+'</p>' : ''}
                    </div>
                    <div class="ml-4 flex flex-shrink-0">
                        <button type="button" data-click="close" class="inline-flex rounded-md text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close</span>
                            <!-- Heroicon name: mini/x-mark -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

        var x = document.getElementById("toast-lazy-ilsya");
        _html = new DOMParser().parseFromString(_html, 'text/html').body.firstChild;
        x.appendChild(_html)
        // catch the new toast
        let toast = document.getElementById('toastlazykey-'+i);

        toast.querySelector('[data-click="close"]').addEventListener('click', function() {
            toastController.remove(toast);
        })

        var toastController = {                
            async remove(_t) {
                _t.classList.toggle('opacity-0');
                _t.classList.toggle(_position)
                setTimeout(() => {
                    _t.remove();
                }, 200);
            },
            fadeIn(__t) {
                __t.classList.toggle('invisible');
                __t.classList.toggle('opacity-0');
                __t.classList.toggle(_position)
            },
            fadeOut(id) {                    
                let _t = document.getElementById(id);
                _t.classList.toggle('opacity-0');
                _t.classList.toggle(_position)
            }
        }

        setTimeout(function() {         
            toastController.fadeIn(toast);
        }, 50)            
        
        setTimeout(() => {
            toastController.remove(toast);
        }, this.duration);  
    }
}