javascript:javascript:
(
	function()
	{
		function sleep(e)
		{
			return new Promise(t=>setTimeout(t,e));
		}

		async function click()
		{
			for (var m = 0;; m++)
			{
				try {
					for(const button of document.getElementsByClassName("btn red-btn widthHeight"))
					{
						button.click();
					}
					document.getElementsByClassName("floatRight prev-nxt")[0].click();
					await sleep(500);
				} 
				catch (z) 
				{
					break; 
				}
			}
		}
		click();
	}()
);