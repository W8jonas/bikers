import React, { useEffect, useRef, memo } from 'react'
import { View } from 'react-native'

// Modules
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet'

function UnMemoBottomSheetModalContainer({
	onDismiss, HeaderComponent, BodyComponent, snapPoints,
}) {
	const modalRef = useRef(null)

	useEffect(() => {
		modalRef.current?.present()
	}, [])

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={modalRef}
				index={0}
				snapPoints={['10%', '60%']}
				enablePanDownToClose={false}
				handleIndicatorStyle={{
					height: 5, width: 50, backgroundColor: '#dcdcdc', borderRadius: 4,
				}}
				onDismiss={onDismiss}
			>
				<View style={{ flex: 1 }}>
					{HeaderComponent}

					<BottomSheetScrollView>
						{BodyComponent}
					</BottomSheetScrollView>

				</View>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	)
}

const BottomSheetModalContainer = memo(UnMemoBottomSheetModalContainer)

export { BottomSheetModalContainer }
