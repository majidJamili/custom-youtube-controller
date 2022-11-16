                    // 2. This code loads the IFrame Player API code asynchronously.
                    console.log('File connected...');
                    var tag = document.createElement('script');
                    tag.src = "http://www.youtube.com/player_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];


                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                    // 3. This function creates an <iframe> (and YouTube player)
                    //    after the API code downloads.
                    var player;
                    function onYouTubePlayerAPIReady() {
                        player = new YT.Player('player', {
                            height: '315',
                            width: '560',
                            videoId: 'CsH152NE9Ak',
                            playerVars: {
                                'controls': 0,
                                'autoplay':0
                              },
                
                        });
                        document.getElementById('resume').onclick = function() {
  
                            player.playVideo();
                            
                        };
                        document.getElementById('pause').onclick = function() {
                            player.pauseVideo();
                            const endTimeInput = document.getElementById('end-time-id'); 
                            endTimeInput.value = player.getCurrentTime(); 
                        };

                        document.getElementById('add-task').onclick = function(){
                            player.pauseVideo(); 
                            var currentTime = player.getCurrentTime(); 
                            const taskList = document.getElementById('task-list'); 
                            document.getElementById("myForm").style.display = "block";
                            const startTimeInput = document.getElementById('start-time-id'); 
                            startTimeInput.value = player.getCurrentTime(); 

                            const item = document.createElement('li'); 
                            item.innerHTML = currentTime; 
                            taskList.appendChild(item); 


                        }

                    }

                    function closeForm() {
                        document.getElementById("myForm").style.display = "none";
                      }